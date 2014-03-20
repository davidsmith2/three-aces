define([
    'backbone',
    'backbone-relational'
], function (Backbone) {
    'use strict';
    var MenuItemSize = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-item-size',
        idAttribute: '_id',
        defaults: {
            size: '',
            price: 0
        }
    });
    return MenuItemSize;
});