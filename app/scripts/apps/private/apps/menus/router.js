define([
    'app',
    'apps/private/apps/menus/controller'
],
function (App, controller) {
	App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
		OpenMenusApp.MenuRouter = Marionette.AppRouter.extend({
			routes: {
				'!/openmenus/:open_menu/menus': ''
			}
		});
		var executeAction = function (action, arg) {
	        App.startSubApp('PrivateApp.OpenMenuApp');
	        action(arg);
		};
        App.vent.on('menu:index', function (options) {
            executeAction(controller.index, options);
        });
	});
	return new App.PrivateApp.OpenMenusApp.MenuRouter();
});
