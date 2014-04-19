define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/dataManager',
    'helpers/vent',
    'layouts/screen',
    'layouts/shell'
], function (Backbone, Marionette, $, _, dataManager, vent, screenLayout, shellLayout) {
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
            Backbone.history.start();
            vent.trigger('module:1:init', {
                collection: openMenus
            });
        });
    });

    vent.on('module:1:init', function (options) {
        console.log('module:1:init');
        require([
            'apps/private/screens/openMenus/router'
        ], function (router) {
            router.controller.collection = options.collection;
            router.navigate('!/openmenus', {trigger: true});
        });
    });

    vent.on('module:2:init', function (options) {
        console.log('module:2:init');
        require([
            'apps/private/screens/restaurant/router'
        ], function (router) {
            router.controller.model = options.model;
            router.navigate('!/openmenus/' + options.model.get('_id') + '/edit/restaurant', {trigger: true});
        });
    });

    vent.on('module:3:init', function (options) {
        console.log('module:3:init');
        require([
            'apps/private/screens/environment/router'
        ], function (router) {
            router.controller.model = options.model;
            router.navigate('!/openmenus/' + options.model.get('_id') + '/edit/environment', {trigger: true});
        });
    });

/*
    vent.on('publicApp:show', function () {
        console.log('publicApp:show');
    });
*/

    return app;

});