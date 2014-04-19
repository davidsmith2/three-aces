define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/dataManager',
    'helpers/vent',
    'layouts/screen',
    'layouts/shell',
    'apps/private/screens/openMenus/module',
    'apps/private/screens/restaurant/module',
    'apps/private/screens/environment/module',
    'apps/private/screens/menus/module'
], function (Backbone, Marionette, $, _, dataManager, vent, screenLayout, shellLayout, module1, module2, module3, module4) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        content: '#content'
    });

    app.addInitializer(function () {
        module1.wake();
        module2.wake();
        module3.wake();
        module4.wake();
    });

    app.addInitializer(function () {
        app.content.show(shellLayout);
        vent.trigger('data:get');
    });

    vent.on('privateApp:show', function (shellRegion) {
        console.log('privateApp:show');
        shellRegion.show(screenLayout);
    });

    vent.on('data:get', function () {
        console.log('data:get');
        $.when(dataManager.getCollection('openMenus')).done(function (openMenus) {
            Backbone.history.start();
            vent.trigger('module1:start', {
                collection: openMenus,
                route: '!/openmenus'
            });
        });
    });

/*
    vent.on('publicApp:show', function () {
        console.log('publicApp:show');
    });
*/

    return app;

});