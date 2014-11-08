define([
    'app'
], function (App) {

    App.module('PrivateApp.MenuGroupsApp', function (MenuGroupsApp, App, Backbone, Marionette, $, _) {

        MenuGroupsApp.startWithParent = false;

        MenuGroupsApp.on('start', function () {
            console.log('the menu groups app is starting');
        });

        MenuGroupsApp.on('stop', function () {
            console.log('the menu groups app is stopping');
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
            showMenuGroups: function (menu) {
                require([
                    'apps/private/apps/menu_groups/list/list_controller'
                ], function (Controller) {
                    executeAction(Controller.index, menu);
                });
            },
            newMenuGroup: function (menuGroups) {
                require([
                    'apps/private/apps/menu_groups/new/new_controller'
                ], function (Controller) {
                    executeAction(Controller.create, menuGroups);
                });
            },
            showMenuGroup: function () {},
            editMenuGroup: function (menuGroup) {
                require([
                    'apps/private/apps/menu_groups/edit/edit_controller'
                ], function (Controller) {
                    executeAction(Controller.update, menuGroup);
                });
            },
            deleteMenuGroup: function () {}
        };

        App.PrivateApp.MenusApp.on('menuGroups:show', function (menu) {
            var openMenu = menu.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups.html');
            API.showMenuGroups(menu);
        });

        App.PrivateApp.MenuGroupsApp.on('menuGroup:new', function (menuGroups) {
            var menu = menuGroups.menu;
            var openMenu = menu.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups.html?action=new');
            API.newMenuGroup(menuGroups);
        });

        App.PrivateApp.MenuGroupsApp.on('menuGroup:edit', function (menuGroup) {
            var menu = menuGroup.get('menu');
            var openMenu = menu.get('open_menu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id') + '.html?action=edit');
            API.editMenuGroup(menuGroup);
        });

    });

    return App.PrivateApp.MenusAppRouter;

});