define([
	'app',
	'apps/private/common/views/form',
	'apps/private/apps/open_menus/show/views/layout',
	'apps/private/apps/open_menus/show/views/tabs'
], function (App, FormView, LayoutView, TabsView) {

	App.module('PrivateApp.OpenMenusApp.Show', function (Show, App, Backbone, Marionette, $) {

		Show.Controller = {
			show: function (openMenu) {
				var layoutView = new LayoutView();
				var restaurantView = new FormView({
					model: openMenu.get('restaurant_info'),
					isReadOnly: true
				});
				var environmentView = new FormView({
					model: openMenu.get('environment'),
					isReadOnly: true
				});
				var tabsView = new TabsView();
				layoutView.on('show', function () {
					this.a.show(restaurantView);
					this.b.show(environmentView);
					this.c.show(tabsView);
				});
				tabsView.on('show', function () {
					var self = this;
					$.when(App.request('menu:entities', openMenu)).done(function (menus) {
						require([
							'apps/private/apps/open_menus/show/views/menus',
						], function (MenusView) {
							var menusView = new MenusView({
								collection: menus
							});
							self.menusRegion.show(menusView);
						});
					});
				});
				App.mainRegion.show(layoutView);
			}
		};
	});

	return App.PrivateApp.OpenMenusApp.Show.Controller;

});
