define([
	'jquery',
    'underscore',
    'backbone',
	'backbone.marionette',
    'regionManager',
    'dataManager'
], function ($, _, Backbone, Marionette, regionManager, dataManager) {
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
            'apps/list/listModule',
            'apps/category/categoryModule'
        ], function (listModule, categoryModule) {
            listModule.start(App);
            categoryModule.start(App);
        });
    });

    App.vent.on('UI:addMenuItem', function (modalId) {
        require([
            'apps/form/formModule'
        ], function (formModule) {
            formModule.start(App, modalId);
        });
    });

	return App;

});