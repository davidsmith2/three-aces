define([
	'app',
	'apps/private/apps/open_menus/actions/create',
	'apps/private/apps/open_menus/actions/destroy',
	'apps/private/apps/open_menus/actions/index',
	'apps/private/apps/open_menus/actions/show',
	'entities/open_menu'
],
function (App, createAction, destroyAction, indexAction, showAction) {
	App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
		OpenMenusApp.Controller = Marionette.Controller.extend({
			create: createAction,
			destroy: destroyAction,
			index: indexAction,
			show: showAction
		});
	});
	return new App.PrivateApp.OpenMenusApp.Controller();
});
