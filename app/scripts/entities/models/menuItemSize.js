define([
    'backbone',
    'backbone-relational'
], function (Backbone) {
    'use strict';
    var MenuItemSizeModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-item-sizes',
        idAttribute: '_id',
        defaults: {
            menuItem: '',
            menuItemSizeName: '',
            menuItemSizePrice: 0
        }
    });
    return MenuItemSizeModel;
});