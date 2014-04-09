define([
    'jquery',
    'entities/openMenus',
    'entities/menuItems',
    'entities/menuItemSizes',
    'apps/threeaces.communicator'
], function ($, OpenMenusCollection, MenuItemsCollection, MenuItemSizesCollection, communicator) {
    'use strict';
    // http://stackoverflow.com/questions/18468019/
    var _API = {
        getOpenMenus: function () {
            var openMenus = new OpenMenusCollection();
            var dfd = $.Deferred();
            openMenus.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
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

    communicator.reqres.setHandler('openMenus', function () {
        return _API.getOpenMenus();
    });

    communicator.reqres.setHandler('menuItems', function () {
        return _API.getMenuItems();
    });

    communicator.reqres.setHandler('menuItemSizes', function () {
        return _API.getMenuItemSizes();
    });

    return {
        getOpenMenus: function () {
            return communicator.reqres.request('openMenus');
        },
        getMenuItems: function () {
            return communicator.reqres.request('menuItems');
        },
        getMenuItemSizes: function () {
            return communicator.reqres.request('menuItemSizes');
        }
    };

});