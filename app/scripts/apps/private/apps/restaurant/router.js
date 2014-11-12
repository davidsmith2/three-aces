define([
    'app',
    'apps/private/apps/restaurant/controller'
],
function (App, controller) {
    App.module('PrivateApp.RestaurantApp', function (RestaurantApp, App, Backbone, Marionette) {
        RestaurantApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus/:open_menu/restaurant/edit': 'update'
            }
        });
        RestaurantApp.on('restaurant:show', function (openMenuId) {
            controller.show(openMenuId);
        });
        RestaurantApp.on('restaurant:edit', function (openMenuId) {
            App.navigate('!/openmenus/' + openMenuId + '/restaurant/edit', {trigger: true});
        });
        RestaurantApp.on('restaurant:save restaurant:cancel', function (openMenuId) {
            App.navigate('!/openmenus/' + openMenuId);
        });
    });
    return new App.PrivateApp.RestaurantApp.Router();
});
