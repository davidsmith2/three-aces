define([
    'application',
    'apps/menu-items/list/list-view'
], function (App, List) {
    'use strict';

    List = App.module('MenuItemsApp.List') || List;

    List.Controller = {
        listMenuItems: function () {
            var menuItemsView = new App.MenuItemsApp.List.MenuItems({
                collection: App.collections.menuItems
            });
            App.mainRegion.show(menuItemsView);
        }
    };

    return List;

});