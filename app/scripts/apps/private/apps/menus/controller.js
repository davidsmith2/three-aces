define([
	'app',
	'apps/private/apps/menus/actions/index',
    'apps/private/apps/menus/actions/destroy',
    'entities/menu'
],
function (App, indexAction, destroyAction) {
	App.module('PrivateApp.OpenMenuApp', function (OpenMenuApp, App, Backbone, Marionette) {
		OpenMenuApp.MenuController = Marionette.Controller.extend({
			index: indexAction,
            destroy: destroyAction
		});
	});
	return new App.PrivateApp.OpenMenuApp.MenuController();
});
