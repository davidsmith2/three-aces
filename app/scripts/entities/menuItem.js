define([
    'backbone',
    'entities/menuItemSize',
    'backbone-relational'
], function (Backbone, MenuItemSize) {
    'use strict';
    var MenuItem = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-item',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'sizes',
                relatedModel: MenuItemSize,
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
            price: null,
            sizes: null
        }
    });
    return MenuItem;
});