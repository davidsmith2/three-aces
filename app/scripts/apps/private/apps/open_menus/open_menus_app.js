define([
    'app'
], function (App) {

    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette, $, _) {

        OpenMenusApp.startWithParent = false;

        OpenMenusApp.on('start', function () {
            console.log('OpenMenusApp is starting');
        });

        OpenMenusApp.on('stop', function () {
            console.log('OpenMenusApp is stopping');
        });

    });

    App.module('Routers.PrivateApp.OpenMenusApp', function (OpenMenusAppRouter, App, Backbone, Marionette, $, _) {

        OpenMenusAppRouter.Router = Marionette.AppRouter.extend({
            '!/openmenus': 'index'
        });

        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.OpenMenusApp');
            action(arg);
        };

        var API = {
            showOpenMenus: function () {
                require([
                    'apps/private/apps/open_menus/list/list_controller'
                ], function (ListController) {
                    executeAction(ListController.index);
                });
            }
        };

        App.PrivateApp.on('openMenus:list', function () {
            App.navigate('!/openmenus');
            API.showOpenMenus();
        });

    });

    return App.PrivateApp.OpenMenusAppRouter;

});