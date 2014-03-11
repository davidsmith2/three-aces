define([
	'backbone',
	'communicator',
	'collections/menu-items',
	'models/menu-item',
	'views/add-menu-item',
	'views/menu-items'
], function( Backbone, Communicator, MenuItemsCollection, MenuItemModel, AddMenuItemView, MenuItemsView ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		r1: '#r1',
		r2: '#r2'
	});

	App.on('initialize:after', function () {
		var menuItemsCollection = new MenuItemsCollection();
		menuItemsCollection.fetch();
		menuItemsCollection.on('sync', function () {
			var addMenuItemView = new AddMenuItemView({
				collection: menuItemsCollection,
				model: new MenuItemModel()
			});
			var menuItemsView = new MenuItemsView({
				collection: menuItemsCollection
			});
			App.r1.show(addMenuItemView);
			App.r2.show(menuItemsView);
		});
	});

	/* Add initializers here */
	App.addInitializer( function () {
		//document.body.innerHTML = intakeTmpl({});
		Communicator.mediator.trigger('APP:START');
	});

	return App;

});
