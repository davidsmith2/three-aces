define([
    'backbone',
    'entities/models/menuItemSize',
    'entities/collections/menuItemSizes',
    'backbone-relational'
], function (Backbone, MenuItemSize, MenuItemSizeCollection) {
    'use strict';
    var MenuItem = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuItemSizes',
                relatedModel: MenuItemSize,
                collectionType: MenuItemSizeCollection,
                reverseRelation: {
                    key: 'menuItem',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            menuItemName: '',
            menuItemDescription: '',
            menuItemPrice: 0,
            menuItemSizes: []
        },
        schema: {
            menuItemName: {
                type: 'Text',
                title: 'Name'
            },
            menuItemDescription: {
                type: 'TextArea',
                title: 'Description'
            },
            menuItemPrice: {
                type: 'Text',
                title: 'Price'
            }
        }
    });
    return MenuItem;
});