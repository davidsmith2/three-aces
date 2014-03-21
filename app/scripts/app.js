define([
	'jquery',
    'backbone',
	'backbone.marionette',
    'regionManager',
    'dataManager',
    'communicator'
], function ($, Backbone, Marionette, regionManager, dataManager, communicator) {
    'use strict';

    var App = new Marionette.Application();

    regionManager.addRegions({
        'navRegion': '#nav',
        'mainRegion': '#main',
        'offscreenRegion': '#offscreen'
    });

    var _menuItems;

    App.addInitializer(function () {
        var self = this;
        $.when(communicator.reqres.request('DM:getData', 'MenuItems')).done(function (menuItems) {
            _menuItems = menuItems;
            self.vent.trigger('DM:getData', _menuItems);
        });
    });

    App.vent.on('DM:getData', function (menuItems) {
        require([
            'modules/nav',
            'modules/list'
        ], function (navModule, listModule) {
            navModule.start(App);
            listModule.start(App, menuItems);
        });
    });

    App.vent.on('UI:addMenuItem', function (modalId) {
        require([
            'modules/form'
        ], function (formModule) {
            formModule.start(App, _menuItems, modalId);
        });
    });

	return App;

});