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
            showMenus: function (openMenu) {
                require([
                    'apps/private/apps/menus/list/list_controller'
                ], function (Controller) {
                    executeAction(Controller.index, openMenu);
                });
            },
            newMenu: function (menus) {
                require([
                    'apps/private/apps/menus/new/new_controller'
                ], function (Controller) {
                    executeAction(Controller.create, menus);
                });
            },
            showMenu: function () {},
            editMenu: function (menu) {
                require([
                    'apps/private/apps/menus/edit/edit_controller'
                ], function (Controller) {
                    executeAction(Controller.update, menu);
                });
            },
            deleteMenu: function () {}
        };

        // triggered from the open menus app new-edit controller
        App.PrivateApp.OpenMenusApp.on('menus:show', function (openMenu) {
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus.html');
            API.showMenus(openMenu);
        });

        // triggered from the menus app list controller
        App.PrivateApp.MenusApp.on('menu:new', function (menus) {
            var openMenu = menus.openMenu;
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus.html?action=new');
            API.newMenu(menus);
        });

        // triggered from the menus app list controller
        App.PrivateApp.MenusApp.on('menu:edit', function (menu) {
            var openMenu = menu.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus.html?action=edit');
            API.editMenu(menu);
        });

    });

    return App.PrivateApp.MenusAppRouter;

});