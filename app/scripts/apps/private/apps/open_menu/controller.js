define([
	'app',
    'apps/private/apps/open_menu/views/layout'
],
function (App, OpenMenuView) {
	App.module('PrivateApp.OpenMenuApp', function (OpenMenuApp, App, Backbone, Marionette) {
		OpenMenuApp.Controller = Marionette.Controller.extend({
			show: function (openMenu) {
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
            }
		});
	});
	return new App.PrivateApp.OpenMenuApp.Controller();
});
