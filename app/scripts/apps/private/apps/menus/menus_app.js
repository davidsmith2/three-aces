define([
    'app'
], function (App) {

    App.module('PrivateApp.MenusApp', function (MenusApp, App, Backbone, Marionette, $, _) {

        MenusApp.startWithParent = false;

        MenusApp.on('start', function () {
            console.log('the menus app is starting');
        });

        MenusApp.on('stop', function () {
            console.log('the menus app is stopping');
        });

    });

    App.module('PrivateApp.MenusApp.Routers', function (Routers, App, Backbone, Marionette, $, _) {

        Routers.Router = Marionette.AppRouter.extend({
            '!/openmenus/:open_menu/menus.html': 'index',
            '!/openmenus/:open_menu/menus.html?action=new': 'create',
            '!/openmenus/:open_menu/menus/:menu.html?action=show': 'show',
            '!/openmenus/:open_menu/menus/:menu.html?action=edit': 'update',
            '!/openmenus/:open_menu/menus/:menu.html?action=delete': 'destroy'
        });

        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.MenusApp');
            action(arg);
        };

        var API = {
            showMenus: function (options) {
                require([
                    'apps/private/apps/menus/list/list_controller'
                ], function (Controller) {
                    executeAction(Controller.index, options);
                });
            },
            newMenu: function (options) {
                require([
                    'apps/private/apps/menus/new/new_controller'
                ], function (Controller) {
                    executeAction(Controller.create, options);
                });
            },
            showMenu: function () {

            },
            editMenu: function (options) {
                require([
                    'apps/private/apps/menus/edit/edit_controller'
                ], function (Controller) {
                    executeAction(Controller.update, options);
                });
            },
            deleteMenu: function () {

            }
        };

        App.PrivateApp.OpenMenusApp.on('menus:show', function (options) {
            var openMenu = options.model;
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus.html');
            API.showMenus(options);
        });

        App.PrivateApp.MenusApp.on('menu:new', function (options) {
            var openMenu = options.collection.openMenu;
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus.html?action=new');
            API.newMenu(options);
        });

        App.PrivateApp.MenusApp.on('menu:edit', function (options) {
            var openMenu = options.model.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus.html?action=edit');
            API.editMenu(options);
        });

    });

    return App.PrivateApp.MenusAppRouter;

});