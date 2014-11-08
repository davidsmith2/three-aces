define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/show/views/open_menu',
	'apps/private/apps/open_menus/environment/router',
	'apps/private/apps/open_menus/menus/router',
	'apps/private/apps/open_menus/restaurant/router'
],

function ($, App, OpenMenuView) {
	return function (id) {
		$.when(App.request('openMenu:entity', id)).done(function (openMenu) {
			var openMenuView = new OpenMenuView({
				model: openMenu
			});
			App.mainRegion.show(openMenuView);
			App.vent.trigger('restaurant:show', {
				model: openMenu.get('restaurant_info'),
				region: openMenuView.restaurantRegion
			});
			App.vent.trigger('environment:show', {
				model: openMenu.get('environment'),
				region: openMenuView.environmentRegion
			});
			App.vent.trigger('menu:index', {
				model: openMenu,
				region: openMenuView.menusRegion
			});
		});
	};
});
