define([
    'jquery',
    'entities/omfs',
    'entities/restaurants',
    'entities/menuItems',
    'entities/menuItemSizes',
    'apps/threeaces.communicator'
], function ($, OmfsCollection, RestaurantsCollection, MenuItemsCollection, MenuItemSizesCollection, communicator) {
    'use strict';
    // http://stackoverflow.com/questions/18468019/
    var _API = {
        getOmfs: function () {
            var omfs = new OmfsCollection();
            var dfd = $.Deferred();
            omfs.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getRestaurants: function () {
            var restaurants = new RestaurantsCollection();
            var dfd = $.Deferred();
            restaurants.fetch({
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

    communicator.reqres.setHandler('omfs', function () {
        return _API.getOmfs();
    });

    communicator.reqres.setHandler('menuItems', function () {
        return _API.getMenuItems();
    });

    communicator.reqres.setHandler('menuItemSizes', function () {
        return _API.getMenuItemSizes();
    });

    communicator.reqres.setHandler('restaurants', function () {
        return _API.getRestaurants();
    });

    return {
        getOmfs: function () {
            return communicator.reqres.request('omfs');
        },
        getRestaurants: function () {
            return communicator.reqres.request('restaurants');
        },
        getMenuItems: function () {
            return communicator.reqres.request('menuItems');
        },
        getMenuItemSizes: function () {
            return communicator.reqres.request('menuItemSizes');
        }
    };

});