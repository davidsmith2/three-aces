define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/threeaces.vent',
    'apps/threeaces.layout',
    'apps/threeaces.datamanager',
    'apps/private/threeaces.privateapp'
], function (Backbone, Marionette, $, _, appVent, Layout, DataManager, privateApp) {
    'use strict';

    var ThreeAces = new Marionette.Application();

    ThreeAces.addRegions({
        content: '#content'
    });

    appVent.on('layout:rendered', function () {
        console.log('layout:rendered');
        Backbone.history.start();
    });

    appVent.on('publicApp:show', function (layout) {
        console.log('publicApp:show');
        //publicApp.layout(layout);
    });

    appVent.on('privateApp:show', function (layout) {
        console.log('privateApp:show');
        privateApp.init(layout);
    });

    // data initializer
    ThreeAces.addInitializer(function () {
        $.when(DataManager.getRestaurants()).done(function (restaurants) {
            privateApp.setData(restaurants);
            //publicApp.data(data);
        });
    });

    // layout initializer
    ThreeAces.addInitializer(function () {
        ThreeAces.layout = new Layout();
        ThreeAces.layout.on('show', function () {
            appVent.trigger('layout:rendered');
        });
        ThreeAces.content.show(ThreeAces.layout);
    });

    return ThreeAces;

});