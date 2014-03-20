define([
    'jquery',
    'moduleFactory',
    'entities/menuItems',
    'entities/menuItemSizes'
], function (ModuleFactory, $, MenuItems, MenuItemSizes) {
    'use strict';
    var MenuItemsModule = ModuleFactory.createModule({
        name: 'Entities'
    });
    MenuItemsModule.API = {
        getMenuItemEntities: function () {
            var menuItems = new MenuItems();
            var dfd = $.Deferred();
            menuItems.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getMenuItemSizeEntities: function () {
            var menuItemSizes = new MenuItemSizes();
            var dfd = $.Deferred();
            menuItemSizes.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        }
    };
    return MenuItemsModule;
});