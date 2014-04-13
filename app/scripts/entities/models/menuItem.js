define([
    'backbone',
    'entities/models/menuItemSize',
    'entities/collections/menuItemSizes',
    'backbone-relational'
], function (Backbone, MenuItemSize, MenuItemSizeCollection) {
    'use strict';
    var MenuItem = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-items',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuItemSizes',
                relatedModel: MenuItemSize,
                collectionType: MenuItemSizeCollection,
                includeInJSON: true,
                fetchRelated: true,
                reverseRelation: {
                    key: 'menuItem',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            menuItemName: '',
            menuItemDescription: '',
            menuItemCategory: '',
            menuItemPrice: 0,
            menuItemSizes: [],
            itemUid: ''
        }
    });
    return MenuItem;
});