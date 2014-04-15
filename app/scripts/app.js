define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/dataManager',
    'apps/vent',
    'apps/private/app'
], function (Backbone, Marionette, $, _, DataManager, vent, privateAppController) {
    'use strict';
    var App = new Marionette.Application();
    App.addRegions({
        content: '#content'
    });
    App.addInitializer(function () {
        $.when(DataManager.getCollection('openMenus')).done(function (openMenus) {
            privateAppController.setData(openMenus);
            //publicApp.data(data);
            require([
                'apps/layout'
            ], function (Layout) {
                App.layout = new Layout();
                App.layout.on('show', function () {
                    vent.trigger('layout:rendered');
                });
                App.content.show(App.layout);
            });
        });
    });
    vent.on('layout:rendered', function () {
        Backbone.history.start();
    });
    vent.on('privateApp:show', function (layout) {
        privateAppController.init(layout.main);
    });
    /*
    appVent.on('publicApp:show', function (layout) {
        console.log('publicApp:show');
        publicApp.layout(layout);
    });
    */
    return App;
});