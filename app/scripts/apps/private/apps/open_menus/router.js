define([
    'app',
    'apps/private/apps/open_menus/controller'
],
function (App, controller) {

	App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
		OpenMenusApp.Router = Marionette.AppRouter.extend({
			routes: {
				'!/openmenus': '',
				'!/openmenus/:open_menu': ''
			}
		});
		var executeAction = function (action, arg) {
	        App.startSubApp('PrivateApp.OpenMenusApp');
	        action(arg);
		};
        App.vent.on('openMenus:index', function () {
            App.navigate('!/openmenus');
            executeAction(controller.index);
        });
        App.vent.on('openMenu:new', function () {
            App.navigate('!/openmenus');
            executeAction(controller.create);
        });
        App.vent.on('openMenu:show', function (id) {
            App.navigate('!/openmenus/' + id);
            executeAction(controller.show, id);
        });
        App.vent.on('openMenu:delete', function (id) {
            App.navigate('!/openmenus/' + id);
            executeAction(controller.destroy, id);
        });
	});
	return new App.PrivateApp.OpenMenusApp.Router();
});
