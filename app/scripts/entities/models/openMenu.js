define([
    'backbone',
    'entities/models/restaurant',
    'entities/models/environment',
    'entities/models/menu',
    'entities/collections/menus',
    'entities/models/menuItem',
    'entities/collections/menuItems',
    'backbone-relational'
], function (Backbone, Restaurant, Environment, Menu, MenuCollection, MenuItem, MenuItemCollection) {
    'use strict';
    var OpenMenu = Backbone.RelationalModel.extend({
        urlRoot: '/openmenus',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasOne,
                key: 'restaurantInfo',
                relatedModel: Restaurant,
                reverseRelation: {
                    type: Backbone.HasOne,
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasOne,
                key: 'environment',
                relatedModel: Environment,
                reverseRelation: {
                    type: Backbone.HasOne,
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasMany,
                key: 'menus',
                relatedModel: Menu,
                collectionType: MenuCollection,
                reverseRelation: {
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasMany,
                key: 'menuItems',
                relatedModel: MenuItem,
                collectionType: MenuItemCollection,
                reverseRelation: {
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            omfUuid: '',
            omfUpdatedTimestamp: '',
            restaurantInfo: {},
            environment: {},
            menus: [],
            menuItems: []
        }
    });
    return OpenMenu;
});