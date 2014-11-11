define([
    'app',
    'apps/private/apps/menus/controller'
],
function (App, controller) {
    App.module('PrivateApp.MenusApp', function (MenusApp, App, Backbone, Marionette) {
        MenusApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus/:open_menu/menus': 'index',
                '!/openmenus/:open_menu/menus/:menu/delete': 'destroy'
            }
        });
        MenusApp.on('menu:index', function (openMenu) {
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus');
            controller.index(openMenu);
        });
        MenusApp.on('menu:delete', function (openMenuId, menuId) {
            App.navigate('!/openmenus/' + openMenuId + '/menus/' + menuId + '/delete', {trigger: true});
        });
        MenusApp.on('menu:delete:done', function (menu) {
            var openMenu = menu.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
    });
    return new App.PrivateApp.MenusApp.Router();
});
