define([
    'app',
    'apps/private/apps/environment/controller'
],
function (App, controller) {
    App.module('PrivateApp.EnvironmentApp', function (EnvironmentApp, App, Backbone, Marionette) {
        EnvironmentApp.Router = Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                '!/openmenus/:open_menu/environment/edit': 'update'
            }
        });
        EnvironmentApp.on('environment:show', function (openMenuId) {
            controller.show(openMenuId);
        });
        EnvironmentApp.on('environment:edit', function (openMenuId) {
            App.navigate('!/openmenus/' + openMenuId + '/environment/edit', {trigger: true});
        });
        EnvironmentApp.on('environment:save environment:cancel', function (openMenuId) {
            App.navigate('!/openmenus/' + openMenuId);
        });
    });
    return new App.PrivateApp.EnvironmentApp.Router();
});
