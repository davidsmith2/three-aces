define([
	'app',
	'apps/private/apps/environment/actions/show',
	'apps/private/apps/environment/actions/update'
],
function (App, showAction, updateAction) {
	App.module('PrivateApp.OpenMenuApp', function (OpenMenuApp, App, Backbone, Marionette) {
		OpenMenuApp.EnvironmentController = Marionette.Controller.extend({
			show: showAction,
			update: updateAction
		});
	});
	return new App.PrivateApp.OpenMenuApp.EnvironmentController();
});
