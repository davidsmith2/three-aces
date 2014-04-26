define([
    'backbone',
    'entities/models/menuGroup',
    'entities/collections/menuGroups',
    'backbone-relational',
    'backbone-forms'
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
                reverseRelation: {
                    key: 'openMenu',
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