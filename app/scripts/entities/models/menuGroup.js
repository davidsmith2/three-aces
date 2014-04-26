define([
    'backbone',
    'entities/models/menuItem',
    'entities/collections/menuItems',
    'backbone-relational'
], function (Backbone, MenuItem, MenuItemCollection) {
    'use strict';
    var MenuGroup = Backbone.RelationalModel.extend({
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
        },
        schema: {
            groupName: {
                type: 'Text',
                title: 'Name'
            }
        }
    });
    return MenuGroup;
});