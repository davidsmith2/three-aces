define([
    'backbone',
    'models/menu-item-size',
    'backbone-relational'
], function (Backbone, MenuItemSizeModel) {
    'use strict';

    var MenuItemModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-item',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'sizes',
                relatedModel: MenuItemSizeModel,
                reverseRelation: {
                    key: 'menuItem'
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

    return MenuItemModel;

});