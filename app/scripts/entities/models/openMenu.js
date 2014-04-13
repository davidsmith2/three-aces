define([
    'backbone',
    'entities/models/environment',
    'entities/models/menu',
    'entities/collections/menus',
    'entities/models/restaurant',
    'backbone-relational'
], function (Backbone, Environment, Menu, MenuCollection, Restaurant) {
    'use strict';
    var OpenMenuModel = Backbone.RelationalModel.extend({
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
                collectionOptions: function (openMenu) {
                    return {
                        url: '/openmenus/' + openMenu.get('_id') + '/menus'
                    };
                },
                reverseRelation: {
                    key: 'openMenu',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            environment: {},
            menus: [],
            omfUuid: '',
            omfUpdatedTimestamp: '',
            restaurantInfo: {}
        }
    });
    return OpenMenuModel;
});