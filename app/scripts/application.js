define([
	'jquery',
	'backbone.marionette'
], function ($, Marionette) {
    'use strict';

	var App = new Marionette.Application();

	App.addRegions({
		navRegion: '#nav',
		mainRegion: '#main',
		offScreenRegion: '#offscreen'
	});

	App.on('initialize:after', function () {
		require([
			'entities/menu-items',
			'apps/menu-items/nav-controller',
			'apps/menu-items/list/list-controller',
		    'apps/menu-items/form/form-controller'
		], function () {
            var menuItems = App.request('menuItems:entities');
            menuItems.done(function (collection) {
	            App.MenuItemsApp.Nav.Controller.displayNav();
	            App.MenuItemsApp.List.Controller.listMenuItems(collection);
	            App.MenuItemsApp.Form.Controller.displayForm(collection);
	        });
		});
	});

	return App;

});
