define([
	'app',
	'apps/private/apps/restaurant/actions/show',
	'apps/private/apps/restaurant/actions/update'
],
function (App, showAction, updateAction) {
	App.module('PrivateApp.RestaurantApp', function (RestaurantApp, App, Backbone, Marionette) {
		RestaurantApp.Controller = Marionette.Controller.extend({
			show: showAction,
			update: updateAction
		});
	});
	return new App.PrivateApp.RestaurantApp.Controller();
});
