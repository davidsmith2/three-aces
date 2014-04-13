define([
    'backbone',
    'entities/models/menuItem',
    'entities/collections/menuItems',
    'backbone-relational'
], function (Backbone, MenuItem, MenuItemCollection) {
    'use strict';
    var MenuGroup = Backbone.RelationalModel.extend({
        urlRoot: '/api/omfs/:id/menus/:id/menu-groups/:id',
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuItems',
                relatedModel: MenuItem,
                collectionType: MenuItemCollection,
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
    return MenuGroup;
});