define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/screens/openMenus/router',
    'apps/private/screens/restaurant/router',
    'helpers/dataManager',
    'helpers/vent',
    'layouts/screen',
    'layouts/shell',
    'views/generic/buttons'
], function (Backbone, Marionette, $, _, router1, router2, dataManager, vent, screenLayout, shellLayout, ButtonsView) {
    'use strict';

    var App = new Marionette.Application();

    App.addRegions({
        content: '#content'
    });

    App.addInitializer(function () {
        App.content.show(shellLayout);
        vent.trigger('data:get');
    });

    vent.on('privateApp:show', function () {
        console.log('privateApp:show');
        shellLayout.main.show(screenLayout);
    });

    vent.on('data:get', function () {
        console.log('data:get');
        $.when(dataManager.getCollection('openMenus')).done(function (openMenus) {
            Backbone.history.start();
            vent.trigger('data:got', {
                collection: openMenus
            });
        });
    });

    vent.on('data:got', function (options) {
        console.log('data:got');
        router1.controller.collection = options.collection;
        router1.navigate('!/openmenus', {trigger: true});
    });

    vent.on('openMenus:show', function (options) {
        console.log('openMenus:show');
        screenLayout.body.show(options.view);
    });

    vent.on('openMenu:edit', function (options) {
        router2.controller.model = options.model;
        router2.navigate('!/openmenus/' + options.model.get('_id') + '/edit/restaurant', {trigger: true});
    });

    vent.on('restaurant:show', function (options) {
        screenLayout.body.show(options.view);
        screenLayout.footer.show(new ButtonsView({
            model: options.model
        }));
    });

/*
    vent.on('publicApp:show', function () {
        console.log('publicApp:show');
    });
*/

    return App;

});