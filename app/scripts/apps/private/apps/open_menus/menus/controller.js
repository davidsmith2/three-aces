define([
	'app',
	'apps/private/apps/open_menus/menus/actions/index'
],
function (App, indexAction) {
	App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
		OpenMenusApp.MenuController = Marionette.Controller.extend({
			index: indexAction
		});
	});
	return new App.PrivateApp.OpenMenusApp.MenuController();
});
