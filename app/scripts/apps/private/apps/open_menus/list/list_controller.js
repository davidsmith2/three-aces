define([
	'app',
	'apps/private/apps/open_menus/list/list_view'
], function (App, View) {

	App.module('PrivateApp.OpenMenusApp.List', function (List, App, Backbone, Marionette, $, _) {

		var index = function () {
			require([
				'entities/open_menu'
			], getData);
		};

		var getData = function () {
			$.when(App.request('openMenu:entities')).done(showViews);
		};

		var showViews = function (openMenus) {
			var panelView,
				openMenusView,
				layoutView;
			panelView = new View.Panel();
			panelView.on('openMenu:new', function () {
				App.PrivateApp.OpenMenusApp.trigger('openMenu:new', openMenus);
			});
			openMenusView = new View.OpenMenus({
				collection: openMenus
			});
			openMenusView.on('itemview:openMenu:show', function (itemView, options) {
				App.PrivateApp.OpenMenusApp.trigger('openMenu:show', options.model);
			});
			openMenusView.on('itemView:openMenu:edit', function (itemView, options) {
				App.PrivateApp.OpenMenusApp.trigger('openMenu:edit', options.model);
			});
			openMenusView.on('openMenu:delete', function (itemView, options) {
				options.model.destroy();
			});
			layoutView = new View.Layout();
			layoutView.on('show', function () {
				this.panelRegion.show(panelView);
				this.listRegion.show(openMenusView);
			});
			App.mainRegion.show(layoutView);
		};

		List.Controller = {
			index: index
		};
	});

	return App.PrivateApp.OpenMenusApp.List.Controller;

});
