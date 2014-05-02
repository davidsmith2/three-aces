define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/app',
    'helpers/vent',
    'layouts/container'
], function (Backbone, Marionette, $, _, privateApp, vent, containerLayout) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        content: '#container'
    });

    app.addInitializer(function () {
        app.content.show(containerLayout);
        vent.trigger('openMenus:show');
    });

    vent.on('privateApp:show', function () {
        privateApp.wake();
    });

/*
    vent.on('publicApp:show', function () {
        publicApp.wake();
    });
*/

    return app;

});