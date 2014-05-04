define([
    'backbone',
    'entities/models/menuGroup',
    'entities/collections/menuGroups',
    'entities/models/menuItem',
    'entities/collections/menuItems',
    'backbone-relational',
    'backbone-forms'
], function (Backbone, MenuGroup, MenuGroupCollection, MenuItem, MenuItemCollection) {
    'use strict';
    var Menu = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        relations: [
            {
                type: Backbone.HasMany,
                key: 'menuGroups',
                relatedModel: MenuGroup,
                collectionType: MenuGroupCollection,
                reverseRelation: {
                    key: 'menu',
                    includeInJSON: '_id'
                }
            },
            {
                type: Backbone.HasMany,
                key: 'menuItems',
                relatedModel: MenuItem,
                collectionType: MenuItemCollection,
                reverseRelation: {
                    key: 'menu',
                    includeInJSON: '_id'
                }
            }
        ],
        defaults: {
            currencySymbol: '',
            menuName: '',
            menuGroups: [],
            menuItems: []
        },
        schema: {
            menuName: {
                type: 'Text',
                title: 'Name'
            },
            currencySymbol: {
                type: 'Text',
                title: 'Currency Symbol'
            }
        }
    });
    return Menu;
});