define([
    'backbone',
    'entities/menuItemSize'
], function (Backbone, MenuItemSizeModel) {
    'use strict';
    var MenuItemSizesCollection = Backbone.Collection.extend({
        model: MenuItemSizeModel,
        url: '/api/menu-item-sizes'
    });
    return MenuItemSizesCollection;
});