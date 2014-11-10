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
        App.vent.on('openMenus:index', function () {
            executeAction('!/openmenus/index', true);
        });
        App.vent.on('openMenu:new', function () {
            executeAction('!/openmenus/create', true);
        });
        App.vent.on('openMenu:show', function (id) {
            executeAction('!/openmenus/' + id, true);
        });
        App.vent.on('openMenu:delete', function (id) {
            executeAction('!/openmenus/destroy/' + id, true);
        });
    });
    return new App.PrivateApp.OpenMenusApp.Router();
});
