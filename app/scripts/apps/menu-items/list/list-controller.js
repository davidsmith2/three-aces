define([
    'application',
    'apps/menu-items/list/list-view'
], function (App, List) {
    'use strict';

    List = App.module('MenuItemsApp.List') || List;

    List.Controller = {
        listMenuItems: function (menuItems) {
            var menuItemsView = new App.MenuItemsApp.List.MenuItems({
                collection: menuItems
            });
            App.mainRegion.show(menuItemsView);
        }
    };

    return List;

});