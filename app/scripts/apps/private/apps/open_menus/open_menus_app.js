define([
    'app'
], function (App) {

    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp, App, Backbone, Marionette, $, _) {

        OpenMenusApp.startWithParent = false;

        OpenMenusApp.on('start', function () {
            console.log('the open menus app is starting');
        });

        OpenMenusApp.on('stop', function () {
            console.log('the open menus app is stopping');
        });

    });

    App.module('PrivateApp.OpenMenusApp.Routers', function (Routers, App, Backbone, Marionette, $, _) {

        Routers.Router = Marionette.AppRouter.extend({
            '!/openmenus.html': 'index',
            '!/openmenus.html?action=new': 'create',
            '!/openmenus/:open_menu.html?action=show': 'show',
            '!/openmenus/:open_menu.html?action=edit': 'update',
            '!/openmenus/:open_menu.html?action=delete': 'destroy'
        });

        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.OpenMenusApp');
            action(arg);
        };

        var API = {
            showOpenMenus: function () {
                require([
                    'apps/private/apps/open_menus/list/list_controller'
                ], function (Controller) {
                    executeAction(Controller.index);
                });
            },
            newOpenMenu: function (openMenus) {
                require([
                    'apps/private/apps/open_menus/new/new_controller'
                ], function (Controller) {
                    executeAction(Controller.create, openMenus);
                });
            },
            showOpenMenu: function () {},
            editOpenMenu: function (options) {
                require([
                    'apps/private/apps/open_menus/edit/edit_controller'
                ], function (Controller) {
                    executeAction(Controller.update, options);
                });
            },
            deleteOpenMenu: function () {}
        };

        App.PrivateApp.on('openMenus:show', function () {
            App.navigate('!/openmenus.html');
            API.showOpenMenus();
        });

        App.PrivateApp.OpenMenusApp.on('openMenu:new', function (openMenus) {
            App.navigate('!/openmenus.html?action=new');
            API.newOpenMenu(openMenus);
        });

        App.PrivateApp.OpenMenusApp.on('openMenu:show', function (options) {});

        App.PrivateApp.OpenMenusApp.on('openMenu:edit', function (options) {
            var openMenu = options.model;
            App.navigate('!/openmenus/' + openMenu.get('_id') + '.html?action=edit');
            API.editOpenMenu(options);
        });

        App.PrivateApp.OpenMenusApp.on('openMenu:delete', function (options) {
            var openMenu = options.model;
            App.navigate('!/openmenus/' + openMenu.get('_id') + '?.htmlaction=delete');
            API.deleteOpenMenu();
        });

    });

    return App.PrivateApp.OpenMenusAppRouter;

});