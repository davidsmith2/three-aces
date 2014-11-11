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
            var openMenu = menu.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/delete');
            controller.destroy(menu);
        });
        MenusApp.on('menu:delete:done', function (menu) {
            var openMenu = menu.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
    });
    return new App.PrivateApp.MenusApp.Router();
});
