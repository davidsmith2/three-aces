define([
	'app',
	'apps/private/apps/restaurant/actions/show',
	'apps/private/apps/restaurant/actions/update'
],
function (App, showAction, updateAction) {
	App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
		OpenMenusApp.RestaurantController = Marionette.Controller.extend({
			show: showAction,
			update: updateAction
		});
	});
	return new App.PrivateApp.OpenMenusApp.RestaurantController();
});