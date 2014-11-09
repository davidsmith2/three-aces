define([
    'app',
    'apps/private/apps/restaurant/controller'
],
function (App, controller) {
    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
        OpenMenusApp.RestaurantRouter = Marionette.AppRouter.extend({
            routes: {
                '!/openmenus/:open_menu/restaurant': ''
            }
        });
        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.OpenMenuApp');
            action(arg);
        };
        App.vent.on('restaurant:show', function (options) {
            executeAction(controller.show, options);
        });
        App.vent.on('restaurant:edit', function (options) {
            var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/restaurant');
            executeAction(controller.update, options);
        });
        App.vent.on('restaurant:save restaurant:cancel', function (options) {
            var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
    });
    return new App.PrivateApp.OpenMenusApp.RestaurantRouter();
});
