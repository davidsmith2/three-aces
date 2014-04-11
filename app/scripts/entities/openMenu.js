define([
    'backbone',
    'entities/restaurantInfo',
    'entities/environment',
    'entities/menu',
    'entities/menus',
    'backbone-relational'
], function (Backbone, RestaurantInfoModel, EnvironmentModel, MenuModel, MenusCollection) {
    'use strict';
    var OpenMenuModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/open-menus',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasOne,
                key: 'restaurantInfo',
                relatedModel: RestaurantInfoModel,
                reverseRelation: {
                    type: Backbone.HasOne,
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasOne,
                key: 'environment',
                relatedModel: EnvironmentModel,
                reverseRelation: {
                    type: Backbone.HasOne,
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasMany,
                key: 'menus',
                relatedModel: MenuModel,
                collectionType: MenusCollection,
                createModels: false,
                reverseRelation: {
                    type: Backbone.HasOne,
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            restaurantInfo: {},
            environment: {},
            menus: []
        }
    });
    return OpenMenuModel;
});