define([
    'app',
    'apps/private/apps/open_menus/controller'
],
function (App, controller) {
    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
        OpenMenusApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus/index': 'index',
                '!/openmenus/create': 'create',
                '!/openmenus/:open_menu': 'show',
                '!/openmenus/destroy/:open_menu': 'destroy'
            }
        });
        var executeAction = function (path, trigger) {
            App.navigate(path, {trigger: trigger});
        };
        OpenMenusApp.on('openMenus:index', function () {
            executeAction('!/openmenus/index', true);
        });
        OpenMenusApp.on('openMenu:new', function () {
            executeAction('!/openmenus/create', true);
        });
        OpenMenusApp.on('openMenu:show', function (id) {
            executeAction('!/openmenus/' + id, true);
        });
        OpenMenusApp.on('openMenu:delete', function (id) {
            executeAction('!/openmenus/destroy/' + id, true);
        });
    });
    return new App.PrivateApp.OpenMenusApp.Router();
});
