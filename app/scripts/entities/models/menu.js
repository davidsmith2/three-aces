define([
    'backbone',
    'entities/models/menuGroup',
    'entities/collections/menuGroups',
    'backbone-relational'
], function (Backbone, MenuGroup, MenuGroupCollection) {
    'use strict';
    var Menu = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuGroups',
                relatedModel: MenuGroup,
                collectionType: MenuGroupCollection,
                includeInJSON: true,
                fetchRelated: true,
                reverseRelation: {
                    key: 'menu',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            currencySymbol: '',
            menuName: '',
            menuGroups: []
        },
        schema: {
            menuName: {type: 'Text', title: 'Name'},
            currencySymbol: {type: 'Text', title: 'Currency Symbol'}
        }
    });
    return Menu;
});