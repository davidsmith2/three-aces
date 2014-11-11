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
        EnvironmentApp.on('environment:show', function (environment) {
            controller.show(environment);
        });
        EnvironmentApp.on('environment:edit', function (environment) {
            var openMenu = environment.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/environment/edit');
            controller.update(environment);
        });
        EnvironmentApp.on('environment:save environment:cancel', function (environment) {
            var openMenu = environment.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id'));
        });
    });
    return new App.PrivateApp.EnvironmentApp.Router();
});
