define([
    'app',
    'apps/private/apps/menus/controller'
],
function (App, controller) {
    App.module('PrivateApp.MenusApp', function (MenusApp, App, Backbone, Marionette) {
        MenusApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus/:open_menu/menus/:menu/delete': 'destroy'
            }
        });
        MenusApp.on('menu:index', function (openMenu) {
            controller.index(openMenu);
        });
        MenusApp.on('menu:delete', function (menu) {
            App.navigate('!/openmenus/' + menu.get('open_menu') + '/menus/' + menu.get('_id') + '/delete');
            controller.destroy(menu);
        });
    });
    return new App.PrivateApp.MenusApp.Router();
});
