define([
    'backbone',
    'entities/menuItemSize'
], function (Backbone, MenuItemSize) {
    'use strict';
    var MenuItemSizes = Backbone.Collection.extend({
        url: '/api/menu-item-size',
        model: MenuItemSize
    });
    return MenuItemSizes;
});