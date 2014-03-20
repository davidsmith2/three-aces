define([
    'modules/menuItems'
], function (MenuItemsModule) {
    'use strict';
    var requestHandlers = [
        {
            name: 'menuItems:entities',
            handler: function () {
                return MenuItemsModule.API.getMenuItemEntities();
            }
        },
        {
            name: 'menuItemSizes:entities',
            handler: function () {
                return MenuItemsModule.API.getMenuItemSizeEntities();
            }
        }
    ];
    return requestHandlers;
});