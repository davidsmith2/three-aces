define([
	'backbone',
	'communicator',
	'collections/menu-items',
	'models/menu-item',
	'views/add-menu-item',
	'views/menu-items',
	'views/nav'
], function( Backbone, Communicator, MenuItemsCollection, MenuItemModel, AddMenuItemView, MenuItemsView, NavView ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		navRegion: '#nav',
		mainRegion: '#main',
		offScreenRegion: '#offscreen'
	});

	App.on('initialize:after', function () {
		var menuItemsCollection = new MenuItemsCollection();
		menuItemsCollection.fetch();
		menuItemsCollection.on('sync', function () {
			var navView = new NavView();
			var addMenuItemView = new AddMenuItemView({
				collection: menuItemsCollection,
				model: new MenuItemModel()
			});
			addMenuItemView.on('sizesSync', function () {
				var menuItemsView = new MenuItemsView({
					collection: menuItemsCollection
				});
				App.mainRegion.show(menuItemsView);
			});
			App.navRegion.show(navView);
			App.offScreenRegion.show(addMenuItemView);
		});
	});

	/* Add initializers here */
	App.addInitializer( function () {
		//document.body.innerHTML = intakeTmpl({});
		Communicator.mediator.trigger('APP:START');
	});

	return App;

});
