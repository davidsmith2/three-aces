define([
	'app',
	'apps/private/apps/restaurant/actions/show',
	'apps/private/apps/restaurant/actions/update'
],
function (App, showAction, updateAction) {
	App.module('PrivateApp.OpenMenuApp', function (OpenMenuApp, App, Backbone, Marionette) {
		OpenMenuApp.RestaurantController = Marionette.Controller.extend({
			show: showAction,
			update: updateAction
		});
	});
	return new App.PrivateApp.OpenMenuApp.RestaurantController();
});
