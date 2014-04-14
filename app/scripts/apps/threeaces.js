define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp',
    'apps/threeaces.datamanager',
    'apps/threeaces.vent'
], function (Backbone, Marionette, $, _, privateApp, DataManager, appVent) {
    'use strict';
    var App = new Marionette.Application();
    App.addRegions({
        content: '#content'
    });
    App.addInitializer(function () {
        $.when(DataManager.getCollection('openMenus')).done(function (openMenus) {
            privateApp.setData(openMenus);
            //publicApp.data(data);
            require([
                'apps/threeaces.layout'
            ], function (Layout) {
                App.layout = new Layout();
                App.layout.on('show', function () {
                    appVent.trigger('layout:rendered');
                });
                App.content.show(App.layout);
            });
        });
    });
    appVent.on('layout:rendered', function () {
        Backbone.history.start();
    });
    appVent.on('privateApp:show', function (layout) {
        privateApp.init(layout);
    });
    /*
    appVent.on('publicApp:show', function (layout) {
        console.log('publicApp:show');
        publicApp.layout(layout);
    });
    */
    return App;
});