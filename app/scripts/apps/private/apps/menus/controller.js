define([
	'app',
    'apps/private/apps/menus/actions/create',
    'apps/private/apps/menus/actions/destroy',
	'apps/private/apps/menus/actions/index',
	'apps/private/apps/menus/actions/show'
],
function (App, createAction, destroyAction, indexAction, showAction) {
	App.module('PrivateApp.MenusApp', function (MenusApp, App, Backbone, Marionette) {
		MenusApp.Controller = Marionette.Controller.extend({
			create: createAction,
            destroy: destroyAction,
			index: indexAction,
			show: showAction
		});
	});
	return new App.PrivateApp.MenusApp.Controller();
});
