define([
    'app',
    'apps/private/apps/open_menu/controller',
    'apps/private/apps/environment/controller',
    'apps/private/apps/menus/controller',
    'apps/private/apps/restaurant/controller'
],
function (App, controller, environmentController, menusController, restaurantController) {
    App.module('PrivateApp.OpenMenuApp', function (OpenMenuApp, App, Backbone, Marionette) {
        OpenMenuApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            routes: {
                '!/openmenus/:open_menu/environment': '',
                '!/openmenus/:open_menu/restaurant': '',
                '!/openmenus/:open_menu/menus': ''
            }
        });
        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.OpenMenuApp');
            action(arg);
        };
        OpenMenuApp.on('restaurant:show', function (options) {
            executeAction(restaurantController.show, options);
        });
        App.vent.on('restaurant:edit', function (options) {
            var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/restaurant');
            executeAction(restaurantController.update, options);
        });
        App.vent.on('restaurant:save restaurant:cancel', function (options) {
            var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
        OpenMenuApp.on('environment:show', function (options) {
            executeAction(environmentController.show, options);
        });
        App.vent.on('environment:edit', function (options) {
            var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/environment');
            executeAction(environmentController.update, options);
        });
        App.vent.on('environment:save environment:cancel', function (options) {
            var openMenu = options.model.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
        OpenMenuApp.on('menu:index', function (options) {
            executeAction(menusController.index, options);
        });
        App.vent.on('menu:delete', function (menu) {
            executeAction(menusController.destroy, menu);
        });
    });
    return new App.PrivateApp.OpenMenuApp.Router();
});
