define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'entities/collections/openMenus',
    'entities/collections/menus',
    'entities/collections/menuGroups',
    'entities/collections/menuItems',
    'entities/collections/menuItemSizes',
    'apps/threeaces.communicator'
], function (Backbone, Marionette, $, _, OpenMenuCollection, MenuCollection, MenuGroupCollection, MenuItemCollection, MenuItemSizeCollection, communicator) {
    'use strict';

    var _API = {
        collections: {
            openMenus: OpenMenuCollection,
            menus: MenuCollection,
            menuGroups: MenuGroupCollection,
            menuItems: MenuItemCollection,
            menuItemSizes: MenuItemSizeCollection
        },
        setHandlers: function () {
            for (var name in this.collections) {
                this.setHandler(name);
            }
        },
        setHandler: function (name) {
            var self = this;
            communicator.reqres.setHandler(name, function () {
                return self.getCollection(name);
            });
        },
        getCollection: function (name) {
            var collection = new this.collections[name]();
            var dfd = $.Deferred();
            collection.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        }
    };

    var API = {
        getCollection: function (name) {
            return communicator.reqres.request(name);
        }
    };

    _API.setHandlers();
    return API;

});