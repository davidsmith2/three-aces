define([
    'jquery',
    'entities/menuItems',
    'entities/menuItemSizes',
    'communicator'
], function ($, MenuItems, MenuItemSizes, communicator) {
    'use strict';
    // http://stackoverflow.com/questions/18468019/
    var API = {
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

    communicator.reqres.setHandler('menuItems', function () {
        return API.getMenuItems();
    });

    communicator.reqres.setHandler('menuItemSizes', function () {
        return API.getMenuItemSizes();
    });

});