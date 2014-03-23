define([
    'backbone',
    'entities/menuItemSize'
], function (Backbone, MenuItemSize) {
    'use strict';
    var MenuItemSizes = Backbone.Collection.extend({
        model: MenuItemSize,
        url: '/api/menu-item-sizes'
    });
    return MenuItemSizes;
});