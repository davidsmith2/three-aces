define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/threeaces.vent',
    'apps/threeaces.layout',
    'apps/threeaces.datamanager',
    'apps/public/threeaces.publicapp',
    'apps/private/threeaces.privateapp'
], function (Backbone, Marionette, $, _, vent, Layout, DataManager, publicApp, privateApp) {
    'use strict';

    var ThreeAces = new Marionette.Application();

    ThreeAces.addRegions({
        content: '#content'
    });

    vent.on('layout:rendered', function () {
        console.log('layout:rendered');
        Backbone.history.start();
    });

    vent.on('publicApp:show', function (layout) {
        console.log('publicApp:show');
        publicApp.layout(layout);
    });

    vent.on('privateApp:show', function (layout) {
        console.log('privateApp:show');
        privateApp.layout(layout);
    });

    vent.on('menuItem:add', function (dialogId) {
        console.log('menuItem:add');
        privateApp.showDialog(dialogId);
    });

    vent.on('menu:category:show', function (category) {
        console.log('menu:category:show');
    });

    vent.on('menu:show', function () {
        console.log('menu:show');
    });

    // data initializer
    ThreeAces.addInitializer(function () {
        $.when(DataManager.getMenuItems(), DataManager.getMenuItemSizes()).done(function (menuItems, menuItemSizes) {
            var data = {
                menuItems: menuItems[0],
                menuItemSizes: menuItemSizes[0]
            };
            publicApp.data(data);
            privateApp.data(data);
        });
    });

    // layout initializer
    ThreeAces.addInitializer(function () {
        ThreeAces.layout = new Layout();
        ThreeAces.layout.on('show', function () {
            vent.trigger('layout:rendered');
        });
        ThreeAces.content.show(ThreeAces.layout);
    });

    return ThreeAces;

});