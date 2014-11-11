define([
    'app',
    'apps/private/apps/open_menus/controller'
],
function (App, controller) {
    var executeAction = function (path, trigger) {
        App.navigate(path, {trigger: trigger});
    };
    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
        OpenMenusApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus/index': 'index',
                '!/openmenus/new': 'create',
                '!/openmenus/:open_menu': 'show',
                '!/openmenus/delete/:open_menu': 'destroy'
            }
        });
        OpenMenusApp.on('openmenu:index', function () {
            executeAction('!/openmenus/index', true);
        });
        OpenMenusApp.on('openmenu:new', function () {
            executeAction('!/openmenus/new', true);
        });
        OpenMenusApp.on('openmenu:show', function (id) {
            executeAction('!/openmenus/' + id, true);
        });
        OpenMenusApp.on('openmenu:delete', function (id) {
            executeAction('!/openmenus/delete/' + id, true);
        });
    });
    return new App.PrivateApp.OpenMenusApp.Router();
});
