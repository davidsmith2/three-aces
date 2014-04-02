define([
    'backbone',
    'entities/restaurant',
    'entities/environmentInfo',
    'entities/menu',
    'entities/menus',
    'backbone-relational'
], function (Backbone, RestaurantModel, EnvironmentInfoModel, MenuModel, MenusCollection) {
    'use strict';
    var OmfModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/omfs',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasOne,
                key: 'restaurant',
                relatedModel: RestaurantModel,
                includeInJSON: true,
                fetchRelated: true,
                reverseRelation: {
                    key: 'omfUuid',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasOne,
                key: 'environmentInfo',
                relatedModel: EnvironmentInfoModel,
                includeInJSON: true,
                fetchRelated: true,
                reverseRelation: {
                    key: 'omfUuid',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasMany,
                key: 'menus',
                relatedModel: MenuModel,
                collectionType: MenusCollection,
                includeInJSON: true,
                fetchRelated: true,
                reverseRelation: {
                    key: 'omfUuid',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            omfUuid: '',
            omfUpdatedTimestamp: '',
            restaurant: {},
            environmentInfo: {},
            menus: []
        }
    });
    return OmfModel;
});