define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/app',
    'helpers/vent',
    'layouts/container',
    'layouts/main'
], function (Backbone, Marionette, $, _, privateApp, vent, containerLayout, mainLayout) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        content: '#container'
    });

    app.addInitializer(function () {
        app.content.show(containerLayout);
        vent.trigger('openMenus:show');
    });

    vent.on('privateApp:show', function (mainRegion) {
        mainRegion.show(mainLayout);
        privateApp.wake();
    });

/*
    vent.on('publicApp:show', function () {
        console.log('publicApp:show');
    });
*/

    return app;

});