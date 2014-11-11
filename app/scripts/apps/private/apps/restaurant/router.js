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
        RestaurantApp.on('restaurant:show', function (restaurant) {
            controller.show(restaurant);
        });
        RestaurantApp.on('restaurant:edit', function (restaurant) {
            var openMenu = restaurant.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/restaurant/edit');
            controller.update(restaurant);
        });
        RestaurantApp.on('restaurant:save restaurant:cancel', function (restaurant) {
            var openMenu = restaurant.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
    });
    return new App.PrivateApp.RestaurantApp.Router();
});
