define([
	'app',
	'apps/private/apps/menus/actions/index',
    'apps/private/apps/menus/actions/destroy'
],
function (App, indexAction, destroyAction) {
	App.module('PrivateApp.MenusApp', function (MenusApp, App, Backbone, Marionette) {
		MenusApp.Controller = Marionette.Controller.extend({
			index: indexAction,
            destroy: destroyAction
		});
	});
	return new App.PrivateApp.MenusApp.Controller();
});
