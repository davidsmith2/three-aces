define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/app',
    'layouts/container',
    'vents/app',
    'vents/layout'
], function (Backbone, Marionette, $, _, privateApp, ContainerLayout, appVent, layoutVent) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        content: '#container'
    });

    layoutVent.on('layout:container:rendered', function () {
        privateApp.wake();
    });

/*
    layoutVent.on('publicApp:show', function () {
        publicApp.wake();
    });
*/

    app.addInitializer(function () {
        app.content.show(new ContainerLayout());
        appVent.trigger('app:initialized');
    });

    return app;

});