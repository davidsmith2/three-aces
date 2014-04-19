define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/dataManager',
    'helpers/vent',
    'layouts/screen',
    'layouts/shell',
    'views/generic/buttons'
], function (Backbone, Marionette, $, _, dataManager, vent, screenLayout, shellLayout, ButtonsView) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        content: '#content'
    });

    app.addInitializer(function () {
        app.content.show(shellLayout);
        vent.trigger('data:get');
    });

    vent.on('privateApp:show', function () {
        console.log('privateApp:show');
        shellLayout.main.show(screenLayout);
    });

    vent.on('data:get', function () {
        console.log('data:get');
        $.when(dataManager.getCollection('openMenus')).done(function (openMenus) {
            vent.trigger('data:got', {
                collection: openMenus
            });
        });
    });

    vent.on('data:got', function (options) {
        console.log('data:got');
        Backbone.history.start();
        require([
            'apps/private/screens/openMenus/router'
        ], function (router) {
            router.controller.collection = options.collection;
            router.navigate('!/openmenus', {trigger: true});
        });
    });

    vent.on('openMenus:show', function (options) {
        console.log('openMenus:show');
        screenLayout.body.show(options.view);
    });

    vent.on('openMenu:edit', function (options) {
        require([
            'apps/private/screens/restaurant/router'
        ], function (router) {
            router.controller.model = options.model;
            router.navigate('!/openmenus/' + options.model.get('_id') + '/edit/restaurant', {trigger: true});
        });
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

    return app;

});