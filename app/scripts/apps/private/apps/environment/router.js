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
        EnvironmentApp.on('environment:show', function (openMenu) {
            controller.show(openMenu);
        });
        EnvironmentApp.on('environment:edit', function (openMenu) {
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/environment/edit');
            controller.update(openMenu);
        });
        EnvironmentApp.on('environment:save environment:cancel', function (id) {
            App.navigate('!/openmenus/' + id);
        });
    });
    return new App.PrivateApp.EnvironmentApp.Router();
});
