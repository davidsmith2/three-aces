define([
	'app',
    'apps/private/apps/open_menu/views/layout'
],
function (App, LayoutView) {
	App.module('PrivateApp.OpenMenuApp', function (OpenMenuApp, App, Backbone, Marionette) {
		OpenMenuApp.Controller = Marionette.Controller.extend({
			show: function (openMenu) {
                var layoutView = new LayoutView({
                    model: openMenu
                });
                App.mainRegion.show(layoutView);
                App.addRegions(layoutView.regions);
                OpenMenuApp.trigger('restaurant:show', {model: openMenu.get('restaurant_info')});
                OpenMenuApp.trigger('environment:show', {model: openMenu.get('environment')});
                OpenMenuApp.trigger('menu:index', {model: openMenu});
            }
		});
	});
	return new App.PrivateApp.OpenMenuApp.Controller();
});
