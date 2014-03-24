define([
    'jquery',
    'entities/menuItems',
    'entities/menuItemSizes',
    'communicator'
], function ($, MenuItemsCollection, MenuItemSizesCollection, communicator) {
    'use strict';
    // http://stackoverflow.com/questions/18468019/
    var API = {
        getMenuItems: function () {
            var menuItems = new MenuItemsCollection();
            var dfd = $.Deferred();
            menuItems.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getMenuItemSizes: function () {
            var menuItemSizes = new MenuItemSizesCollection();
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