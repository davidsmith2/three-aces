define([
    'application',
    'jquery',
    'backbone',
    'backbone-relational'
], function (App, $, Backbone) {
    'use strict';

    var Entities = App.module('Entities');

    Entities.MenuItemSize = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-item-size',
        idAttribute: '_id',
        defaults: {
            size: '',
            price: 0
        }
    });

    Entities.MenuItemSizes = Backbone.Collection.extend({
        url: '/api/menu-item-size',
        model: Entities.MenuItemSize
    });

    Entities.MenuItem = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-item',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'sizes',
                relatedModel: Entities.MenuItemSize,
                reverseRelation: {
                    key: 'menuItem',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            name: '',
            description: '',
            category: '',
            price: 0,
            sizes: []
        }
    });

    Entities.MenuItems = Backbone.Collection.extend({
        url: '/api/menu-item',
        model: Entities.MenuItem
    });

    var API = {
        getMenuItemEntities: function () {
            var menuItems = new Entities.MenuItems();
            var dfd = $.Deferred();
            menuItems.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        },
        getMenuItemSizeEntities: function () {
            var menuItemSizes = new Entities.MenuItemSizes();
            var dfd = $.Deferred();
            menuItemSizes.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        }
    };

    App.reqres.setHandler('menuItems:entities', function () {
        return API.getMenuItemEntities();
    });

    App.reqres.setHandler('menuItemSizes:entities', function () {
        return API.getMenuItemSizeEntities();
    });

});