define([
    'backbone',
    'entities/menuItem',
    'entities/menuItems',
    'backbone-relational'
], function (Backbone, MenuItemModel, MenuItemsCollection) {
    'use strict';
    var MenuGroupModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/omfs/:id/menus/:id/menu-groups/:id',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuItems',
                relatedModel: MenuItemModel,
                collectionType: MenuItemsCollection,
                includeInJSON: true,
                fetchRelated: true,
                reverseRelation: {
                    key: 'menuGroup',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            groupName: '',
            groupUid: '',
            menuItems: []
        }
    });
    return MenuGroupModel;
});