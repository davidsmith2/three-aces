define([
	'jquery',
	'app',
    'apps/private/apps/open_menus/views/show/layout',
    'apps/private/apps/restaurant/app',
    'apps/private/apps/environment/app',
    'apps/private/apps/menus/app'
],
function ($, App, LayoutView, RestaurantApp, EnvironmentApp, MenusApp) {
	return function (id) {
        var gettingOpenMenu = App.request('openmenu:entity', id);
        $.when(gettingOpenMenu).done(function (openMenu) {
            var layoutView = new LayoutView({
                model: openMenu
            });
            App.mainRegion.show(layoutView);
            App.addRegions(layoutView.regions);
            RestaurantApp.start(openMenu.get('_id'));
            EnvironmentApp.start(openMenu.get('_id'));
            MenusApp.start(openMenu.get('_id'));
        });
	};
});
