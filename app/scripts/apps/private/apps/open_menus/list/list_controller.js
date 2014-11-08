define([
	'app',
	'apps/private/apps/open_menus/list/views/layout',
	'apps/private/apps/open_menus/list/views/open_menus',
	'apps/private/apps/open_menus/list/views/panel'
], function (App, LayoutView, OpenMenusView, PanelView) {

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
			var layoutView,
				openMenusView,
				panelView;
			layoutView = new LayoutView();
			openMenusView = new OpenMenusView({
				collection: openMenus
			});
			panelView = new PanelView();
			layoutView.on('show', function () {
				this.panelRegion.show(panelView);
				this.listRegion.show(openMenusView);
			});
			openMenusView.on('childview:openMenu:show', function (itemView, options) {
				App.PrivateApp.OpenMenusApp.trigger('openMenu:show', options.model.get('id'));
			});
			openMenusView.on('childview:openMenu:edit', function (itemView, options) {
				App.PrivateApp.OpenMenusApp.trigger('openMenu:edit', options.model);
			});
			openMenusView.on('childview:openMenu:delete', function (itemView, options) {
				App.PrivateApp.OpenMenusApp.trigger('openMenu:delete', options.model);
			});
			panelView.on('openMenu:new', function () {
				App.PrivateApp.OpenMenusApp.trigger('openMenu:new', openMenus);
			});
			App.mainRegion.show(layoutView);
		};

		List.Controller = {
			index: index
		};
	});

	return App.PrivateApp.OpenMenusApp.List.Controller;

});
