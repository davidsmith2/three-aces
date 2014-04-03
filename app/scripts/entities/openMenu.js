define([
    'backbone',
    'entities/restaurant',
    'entities/environment',
    'entities/menu',
    'entities/menus',
    'backbone-relational'
], function (Backbone, RestaurantModel, EnvironmentModel, MenuModel, MenusCollection) {
    'use strict';
    return Backbone.RelationalModel.extend({
        urlRoot: '/api/open-menus',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasOne,
                key: 'restaurantInfo',
                relatedModel: RestaurantModel,
                reverseRelation: {
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasOne,
                key: 'environmentInfo',
                relatedModel: EnvironmentModel,
                reverseRelation: {
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasMany,
                key: 'menus',
                relatedModel: MenuModel,
                collectionType: MenusCollection,
                reverseRelation: {
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            omfUuid: '',
            omfUpdatedTimestamp: '',
            restaurantInfo: [],
            environmentInfo: [],
            menus: []
        }
    });
});