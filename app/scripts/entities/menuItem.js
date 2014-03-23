define([
    'backbone',
    'entities/menuItemSize',
    'entities/menuItemSizes',
    'backbone-relational'
], function (Backbone, MenuItemSize, MenuItemSizes) {
    'use strict';
    var MenuItem = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-items',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'sizes',
                relatedModel: MenuItemSize,
                collectionType: MenuItemSizes,
                includeInJSON: true,
                fetchRelated: true,
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
    return MenuItem;
});