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
                '!/openmenus/:open_menu/menus/new': 'create',
                '!/openmenus/:open_menu/menus/:menu': 'show',
                '!/openmenus/:open_menu/menus/:menu/delete': 'destroy'
            }
        });
        MenusApp.on('menu:index', function (openMenuId) {
            App.navigate('!/openmenus/' + openMenuId);
            controller.index(openMenuId);
        });
        MenusApp.on('menu:new', function (openMenuId) {
            App.navigate('!/openmenus/' + openMenuId + '/menus/new', {trigger: true});
        });
        MenusApp.on('menu:show', function (openMenuId, menuId) {
            App.navigate('!/openmenus/' + openMenuId + '/menus/' + menuId, {trigger: true});
        });
        MenusApp.on('menu:delete', function (openMenuId, menuId) {
            App.navigate('!/openmenus/' + openMenuId + '/menus/' + menuId + '/delete', {trigger: true});
        });
        MenusApp.on('menu:delete:done', function (openMenuId) {
            App.navigate('!/openmenus/' + openMenuId);
        });
    });
    return new App.PrivateApp.MenusApp.Router();
});
