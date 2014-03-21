define([
    'jquery',
    'moduleFactory',
    'entities/menuItems',
    'entities/menuItemSizes'
], function ($, ModuleFactory, MenuItems, MenuItemSizes) {
    'use strict';
    return {
        getMenuItems: function () {
            var menuItems = new MenuItems();
            var dfd = $.Deferred();
            menuItems.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getMenuItemSizes: function () {
            var menuItemSizes = new MenuItemSizes();
            var dfd = $.Deferred();
            menuItemSizes.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        }
    };
});