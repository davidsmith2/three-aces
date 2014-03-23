define([
    'backbone',
    'backbone-relational'
], function (Backbone) {
    'use strict';
    var MenuItemSize = Backbone.RelationalModel.extend({
        modelName: 'menuItemSize',
        urlRoot: '/api/menu-item-sizes',
        idAttribute: '_id',
        defaults: {
            size: '',
            price: 0
        }
    });
    return MenuItemSize;
});