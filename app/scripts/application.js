define([
	'backbone',
	'communicator',
	'collections/menu-items',
	'models/menu-item',
	'views/add-menu-item'
], function( Backbone, Communicator, MenuItemsCollection, MenuItemModel, AddMenuItemView ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		r1: '#r1'
	});

	App.on('initialize:after', function () {
		var menuItemsCollection = new MenuItemsCollection();
		var menuItemModel = new MenuItemModel();
		menuItemsCollection.fetch();
		menuItemsCollection.on('sync', function () {
			var addMenuItemView = new AddMenuItemView({
				model: menuItemModel,
				collection: menuItemsCollection
			});
			App.r1.show(addMenuItemView);
		});
	});

	/* Add initializers here */
	App.addInitializer( function () {
		//document.body.innerHTML = intakeTmpl({});
		Communicator.mediator.trigger('APP:START');
	});

	return App;

});
