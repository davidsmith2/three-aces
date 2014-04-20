define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/app',
    'helpers/vent',
    'layouts/screen',
    'layouts/shell'
], function (Backbone, Marionette, $, _, privateApp, vent, screenLayout, shellLayout) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        content: '#content'
    });

    app.addInitializer(function () {
        app.content.show(shellLayout);
        vent.trigger('data:get');
    });

    vent.on('privateApp:show', function (shellRegion) {
        console.log('privateApp:show');
        shellRegion.show(screenLayout);
        privateApp.wake();
    });

/*
    vent.on('publicApp:show', function () {
        console.log('publicApp:show');
    });
*/

    return app;

});