define([
    'app',
    'apps/private/apps/open_menus/controller'
],
function (App, controller) {
    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette) {
        OpenMenusApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus': 'index',
                '!/openmenus/new': 'create',
                '!/openmenus/:open_menu': 'show',
                '!/openmenus/:open_menu/delete': 'destroy'
            }
        });
        OpenMenusApp.on('openmenu:index', function () {
            App.navigate('!/openmenus', {trigger: true});
        });
        OpenMenusApp.on('openmenu:new', function () {
            App.navigate('!/openmenus/new', {trigger: true});
        });
        OpenMenusApp.on('openmenu:show', function (id) {
            App.navigate('!/openmenus/' + id, {trigger: true});
        });
        OpenMenusApp.on('openmenu:delete', function (id) {
            App.navigate('!/openmenus/' + id + '/delete', {trigger: true});
        });
        OpenMenusApp.on('openmenu:delete:done', function () {
            App.navigate('!/openmenus');
        });
    });
    return new App.PrivateApp.OpenMenusApp.Router();
});
