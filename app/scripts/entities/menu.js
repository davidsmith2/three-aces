define([
    'backbone',
    'entities/menuGroup',
    'entities/menuGroups',
    'backbone-relational'
], function (Backbone, MenuGroupModel, MenuGroupsCollection) {
    'use strict';
    var MenuModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/open-menus/:id/menus',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuGroups',
                relatedModel: MenuGroupModel,
                collectionType: MenuGroupsCollection,
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
        }
    });
    return MenuModel;
});