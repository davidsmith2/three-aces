define([
    'backbone',
    'entities/menuItemSize',
    'entities/menuItemSizes',
    'backbone-relational'
], function (Backbone, MenuItemSizeModel, MenuItemSizesCollection) {
    'use strict';
    var MenuItemModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-items',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuItemSizes',
                relatedModel: MenuItemSizeModel,
                collectionType: MenuItemSizesCollection,
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
            menuItemSizes: []
        }
    });
    return MenuItemModel;
});