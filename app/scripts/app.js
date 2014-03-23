define([
	'jquery',
    'backbone',
	'backbone.marionette',
    'regionManager',
    'dataManager'
], function ($, Backbone, Marionette, regionManager, dataManager) {
    'use strict';

    var App = new Marionette.Application();

    App.collections = {};

    regionManager.addRegions({
        'navRegion': '#nav',
        'mainRegion': '#main',
        'offscreenRegion': '#offscreen'
    });

    App.addInitializer(function () {
        var menuItems = dataManager.getMenuItems(),
            menuItemSizes = dataManager.getMenuItemSizes(),
            self = this;
        // https://api.jquery.com/jQuery.when/
        $.when(menuItems, menuItemSizes).done(function (menuItems, menuItemSizes) {
            App.collections.menuItems = menuItems[0];
            App.collections.menuItemSizes = menuItemSizes[0];
            self.vent.trigger('DM:getData');
        });
    });

    App.vent.on('DM:getData', function () {
        require([
            'modules/nav',
            'modules/list'
        ], function (navModule, listModule) {
            navModule.start(App);
            listModule.start(App);
        });
    });

    App.vent.on('UI:addMenuItem', function (modalId) {
        require([
            'modules/form'
        ], function (formModule) {
            formModule.start(App, modalId);
        });
    });

	return App;

});