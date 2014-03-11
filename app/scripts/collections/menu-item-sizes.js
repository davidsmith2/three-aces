define([
    'backbone',
    'models/menu-item-size'
], function (Backbone, MenuItemSizeModel) {
    'use strict';

    var MenuItemSizesCollection = Backbone.Collection.extend({
        url: '/api/menu-item-size',
        model: MenuItemSizeModel
    });

    return MenuItemSizesCollection;

});