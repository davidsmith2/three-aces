define([
    'backbone',
    'entities/menuItem'
], function (Backbone, MenuItemModel) {
    'use strict';
    var MenuItemsCollection = Backbone.Collection.extend({
        model: MenuItemModel,
        url: '/api/menu-items',
        comparator: 'menuItemCategory'
    });
    return MenuItemsCollection;
});