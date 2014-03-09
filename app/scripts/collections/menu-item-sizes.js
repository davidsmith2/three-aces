define([
    'backbone',
    'models/menu-item-size'
], function (Backbone, MenuItemSize) {
    'use strict';

    var MenuItemSizesCollection = Backbone.Collection.extend({
        model: MenuItemSize,
        url: '/api/menu-item-size'
    });

    return MenuItemSizesCollection;

});