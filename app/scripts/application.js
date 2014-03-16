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

	App.collections = {};

	App.on('initialize:after', function () {
		require([
			'entities/menu-items',
			'apps/menu-items/nav-controller',
			'apps/menu-items/list/list-controller',
		    'apps/menu-items/form/form-controller'
		], function () {
			var menuItemSizes = App.request('menuItemSizes:entities');
			menuItemSizes.done(function (menuItemSizes) {
	            var menuItems = App.request('menuItems:entities');
				App.collections.menuItemSizes = menuItemSizes;
	            menuItems.done(function (menuItems) {
					App.collections.menuItems = menuItems;
		            App.MenuItemsApp.Nav.Controller.displayNav();
		            App.MenuItemsApp.List.Controller.listMenuItems();
		            App.MenuItemsApp.Form.Controller.displayForm();
		        });
			});
		});
	});

	return App;

});
