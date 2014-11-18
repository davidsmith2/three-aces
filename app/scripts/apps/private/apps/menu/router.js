define([
    'app',
    'apps/private/apps/menu/controller'
],
function (App, controller) {
    App.module('PrivateApp.MenuApp', function (MenuApp, App, Backbone, Marionette) {
        MenuApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus/:open_menu/menus/:menu': 'show'
            }
        });
        MenuApp.on('menu:show', function (menu) {
            controller.show(menu);
        });
    });
    return new App.PrivateApp.MenusApp.Router();
});
