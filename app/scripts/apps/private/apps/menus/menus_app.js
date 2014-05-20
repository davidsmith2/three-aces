define([
    'app'
], function (App) {

    App.module('PrivateApp.MenusApp', function (MenusApp, App, Backbone, Marionette, $, _) {

        MenusApp.startWithParent = false;

        MenusApp.on('start', function () {
            console.log('MenusApp is starting');
        });

        MenusApp.on('stop', function () {
            console.log('MenusApp is stopping');
        });

    });

    App.module('Routers.PrivateApp.MenusApp', function (MenusAppRouter, App, Backbone, Marionette, $, _) {

        MenusAppRouter.Router = Marionette.AppRouter.extend({
            '!/openmenus/:open_menu/menus': 'index'
        });

        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.MenusApp');
            action(arg);
        };

        var API = {
            index: function (options) {
                require([
                    'apps/private/apps/menus/list/list_controller'
                ], function (ListController) {
                    executeAction(ListController.index, options);
                });
            }
        };

        App.PrivateApp.OpenMenusApp.on('menus:list', function (options) {
            var openMenu = options.model;
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus');
            API.index(options);
        });

    });

    return App.PrivateApp.MenusAppRouter;

});