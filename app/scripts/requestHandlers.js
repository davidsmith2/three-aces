define([
    'modules/menuItems'
], function (MenuItemsModule) {
    'use strict';
    var requestHandlers = {
        'menuItems:entities': function () {
            return MenuItemsModule.API.getMenuItemEntities();
        },
        'menuItemSizes:entities': function () {
            return MenuItemsModule.API.getMenuItemSizeEntities();
        }
    };
    return requestHandlers;
});