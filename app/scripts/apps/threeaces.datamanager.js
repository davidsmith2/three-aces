define([
    'jquery',
    'entities/collections/openMenus',
    'entities/collections/menus',
    'entities/collections/menuItems',
    'entities/collections/menuItemSizes',
    'apps/threeaces.communicator'
], function ($, OpenMenuCollection, MenuCollection, MenuItemCollection, MenuItemSizeCollection, communicator) {
    'use strict';
    // http://stackoverflow.com/questions/18468019/
    var _API = {
        getOpenMenus: function () {
            var openMenus = new OpenMenuCollection();
            var dfd = $.Deferred();
            openMenus.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getMenus: function (collection) {
            var menus = collection || new MenuCollection();
            var dfd = $.Deferred();
            menus.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getMenuItems: function () {
            var menuItems = new MenuItemCollection();
            var dfd = $.Deferred();
            menuItems.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getMenuItemSizes: function () {
            var menuItemSizes = new MenuItemSizeCollection();
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

    communicator.reqres.setHandler('menus', function () {
        return _API.getMenus();
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
        getMenus: function () {
            return communicator.reqres.request('menus');
        },
        getMenuItems: function () {
            return communicator.reqres.request('menuItems');
        },
        getMenuItemSizes: function () {
            return communicator.reqres.request('menuItemSizes');
        }
    };

});