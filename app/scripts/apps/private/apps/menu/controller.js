define([
	'app',
	'apps/private/apps/menu/actions/show'
],
function (App, showAction) {
	App.module('PrivateApp.MenuApp', function (MenuApp, App, Backbone, Marionette) {
		MenuApp.Controller = Marionette.Controller.extend({
			show: showAction
		});
	});
	return new App.PrivateApp.MenuApp.Controller();
});
