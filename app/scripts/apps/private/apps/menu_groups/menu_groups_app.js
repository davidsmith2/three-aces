define([
    'app'
], function (App) {

    App.module('PrivateApp.MenuGroupsApp', function (MenuGroupsApp, App, Backbone, Marionette, $, _) {

        MenuGroupsApp.startWithParent = false;

        MenuGroupsApp.on('start', function () {
            console.log('MenuGroupsApp is starting');
        });

        MenuGroupsApp.on('stop', function () {
            console.log('MenuGroupsApp is stopping');
        });

    });

    App.module('PrivateApp.MenuGroupsApp.Routers', function (Routers, App, Backbone, Marionette, $, _) {

        Routers.Router = Marionette.AppRouter.extend({
            '!/openmenus/:open_menu/menus/:menu/menugroups.html': 'index',
            '!/openmenus/:open_menu/menus/:menu/menugroups.html?action=new': 'create',
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group.html?action=show': 'show',
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group.html?action=edit': 'update',
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group.html?action=delete': 'destroy'
        });

        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.MenuGroupsApp');
            action(arg);
        };

        var API = {
            showMenuGroups: function (options) {
                require([
                    'apps/private/apps/menu_groups/list/list_controller'
                ], function (Controller) {
                    executeAction(Controller.index, options);
                });
            },
            newMenuGroup: function (options) {
                require([
                    'apps/private/apps/menus_groups/new/new_controller'
                ], function (Controller) {
                    executeAction(Controller.create, options);
                });
            },
            showMenuGroup: function () {

            },
            editMenuGroup: function (options) {
                require([
                    'apps/private/apps/menu_groups/edit/edit_controller'
                ], function (Controller) {
                    executeAction(Controller.update, options);
                });
            },
            deleteMenuGroup: function () {

            }
        };

        App.PrivateApp.MenusApp.on('menuGroups:show', function (options) {
            var menu = options.model;
            var openMenu = menu.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups.html');
            API.showMenuGroups(options);
        });

        App.PrivateApp.MenuGroupsApp.on('menuGroups:new', function (options) {
            var menu = options.collection.menu;
            var openMenu = options.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + 'menugroups.html?action=new');
            API.newMenuGroup(options);
        });

        App.PrivateApp.MenuGroupsApp.on('menuGroups:edit', function (options) {
            var menuGroup = options.model;
            var menu = menuGroup.get('menu');
            var openMenu = menu.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + 'menugroups' + menuGroup.get('_id') + '.html?action=edit');
            API.editMenuGroup(options);
        });

    });

    return App.PrivateApp.MenusAppRouter;

});