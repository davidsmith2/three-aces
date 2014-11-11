define([
	'app',
	'apps/private/apps/environment/actions/show',
	'apps/private/apps/environment/actions/update'
],
function (App, showAction, updateAction) {
	App.module('PrivateApp.EnvironmentApp', function (EnvironmentApp, App, Backbone, Marionette) {
		EnvironmentApp.Controller = Marionette.Controller.extend({
			show: showAction,
			update: updateAction
		});
	});
	return new App.PrivateApp.EnvironmentApp.Controller();
});
