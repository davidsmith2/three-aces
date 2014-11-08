define([
    'app',
    'apps/private/apps/open_menus/environment/controller'
],
function (App, controller) {
	App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
		OpenMenusApp.EnvironmentRouter = Marionette.AppRouter.extend({
			routes: {
				'!/openmenus/:open_menu/environment': ''
			}
		});
		var executeAction = function (action, arg) {
	        App.startSubApp('PrivateApp.OpenMenuApp');
	        action(arg);
		};
        App.vent.on('environment:show', function (options) {
            executeAction(controller.show, options);
        });
        App.vent.on('environment:edit', function (options) {
        	var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/environment');
            executeAction(controller.update, options);
        });
        App.vent.on('environment:save environment:cancel', function (options) {
        	var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
	});
	return new App.PrivateApp.OpenMenusApp.EnvironmentRouter();
});
