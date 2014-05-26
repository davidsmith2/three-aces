define([
    'app'
], function (App) {

    App.module('PrivateApp.MenuItemsApp', function (MenuItemsApp, App, Backbone, Marionette, $, _) {

        MenuItemsApp.startWithParent = false;

        MenuItemsApp.on('start', function () {
            console.log('the menu items app is starting');
        });

        MenuItemsApp.on('stop', function () {
            console.log('the menu items app is stopping');
        });

    });

    App.module('PrivateApp.MenuItemsApp.Routers', function (Routers, App, Backbone, Marionette, $, _) {

        Routers.Router = Marionette.AppRouter.extend({
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group/menuitems.html': 'index',
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group/menuitems.html?action=new': 'create',
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group/menuitems/:menuItem.html?action=show': 'show',
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group/menuitems/:menuItem.html?action=edit': 'update',
            '!/openmenus/:open_menu/menus/:menu/menugroups/:menu_group/menuitems/:menuItem.html?action=delete': 'destroy'
        });

        var executeAction = function (action, arg) {
            App.startSubApp('PrivateApp.MenuItemsApp');
            action(arg);
        };

        var API = {
            showMenuItems: function (menuGroup) {
                require([
                    'apps/private/apps/menu_items/list/list_controller'
                ], function (Controller) {
                    executeAction(Controller.index, menuGroup);
                });
            },
            newMenuItem: function (menuItems) {
                require([
                    'apps/private/apps/menu_items/new/new_controller'
                ], function (Controller) {
                    executeAction(Controller.create, menuItems);
                });
            },
            showMenuItem: function (menuItem) {},
            editMenuItem: function (menuItem) {
                require([
                    'apps/private/apps/menu_items/edit/edit_controller'
                ], function (Controller) {
                    executeAction(Controller.update, menuItem);
                });
            },
            deleteMenuItem: function (menuItem) {}
        };

        App.PrivateApp.MenuGroupsApp.on('menuItems:show', function (menuGroup) {
            var menu = menuGroup.get('menu');
            var openMenu = menu.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id') + '/menuitems.html');
            API.showMenuItems(menuGroup);
        });

        App.PrivateApp.MenuItemsApp.on('menuItem:new', function (menuItems) {
            var menuGroup = menuItems.menuGroup;
            var menu = menuGroup.get('menu');
            var openMenu = menu.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id') + '/menuitems.html?action=new');
            API.newMenuItem(menuItems);
        });

        App.PrivateApp.MenuItemsApp.on('menuItem:edit', function (menuItem) {
            var menuGroup = menuItem.get('menuGroup');
            var menu = menuGroup.get('menu');
            var openMenu = menu.get('openMenu');
            App.navigate('!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id') + '/menuitems/' + menuItem.get('_id') + '.html?action=edit');
            API.editMenuItem(menuItem);
        });

    });

    return App.PrivateApp.MenuItemsAppRouter;

});