define([
	'app',
	'apps/private/apps/environment/actions/show',
	'apps/private/apps/environment/actions/update'
],
function (App, showAction, updateAction) {
	App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
		OpenMenusApp.EnvironmentController = Marionette.Controller.extend({
			show: showAction,
			update: updateAction
		});
	});
	return new App.PrivateApp.OpenMenusApp.EnvironmentController();
});