define([
	'app',
	'apps/private/common/views/form',
	'apps/private/apps/open_menus/show/views/layout',
	'apps/private/apps/open_menus/show/views/tabs'
], function (App, FormView, LayoutView, TabsView) {

	App.module('PrivateApp.OpenMenusApp.Show', function (Show, App, Backbone, Marionette, $, _) {

		Show.Controller = {
			show: function (openMenu) {
				var layoutView = new LayoutView();
				var restaurantView = new FormView({
					model: openMenu.get('restaurant_info')
				});
				var environmentView = new FormView({
					model: openMenu.get('environment')
				});
				var tabsView = new TabsView();
				layoutView.on('show', function () {
					this.a.show(restaurantView);
					this.b.show(environmentView);
					this.c.show(tabsView);
				});
				tabsView.on('show', function () {
					var menusView = new Marionette.CollectionView({
						collection: openMenu.get('menus')
					});
					this.menusRegion.show(menusView);
				});
				App.mainRegion.show(layoutView);
			}
		};
	});

	return App.PrivateApp.OpenMenusApp.Show.Controller;

});
