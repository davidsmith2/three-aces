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
        RestaurantApp.on('restaurant:show', function (openMenu) {
            controller.show(openMenu);
        });
        RestaurantApp.on('restaurant:edit', function (openMenu) {
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/restaurant/edit');
            controller.update(openMenu);
        });
        RestaurantApp.on('restaurant:save restaurant:cancel', function (id) {
            App.navigate('!/openmenus/' + id);
        });
    });
    return new App.PrivateApp.RestaurantApp.Router();
});
