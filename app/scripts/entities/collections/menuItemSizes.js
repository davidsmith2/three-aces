define([
    'backbone',
    'entities/models/menuItemSize'
], function (Backbone, MenuItemSize) {
    'use strict';
    var MenuItemSizeCollection = Backbone.Collection.extend({
        model: MenuItemSize,
        url: '/api/menu-item-sizes'
    });
    return MenuItemSizeCollection;
});