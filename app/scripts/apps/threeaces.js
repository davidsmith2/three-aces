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
    var ThreeAces = new Marionette.Application();
    ThreeAces.addRegions({
        content: '#content'
    });
    ThreeAces.addInitializer(function () {
        $.when(DataManager.getOpenMenus(), DataManager.getRestaurants()).done(function (openMenus, restaurants) {
            privateApp.setData({
                openMenus: openMenus[0],
                restaurants: restaurants[0]
            });
            //publicApp.data(data);
            require([
                'apps/threeaces.layout'
            ], function (Layout) {
                ThreeAces.layout = new Layout();
                ThreeAces.content.show(ThreeAces.layout);
                ThreeAces.layout.on('show', function () {
                    appVent.trigger('layout:rendered');
                });
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
    return ThreeAces;
});