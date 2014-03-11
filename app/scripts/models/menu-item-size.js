define([
    'backbone',
    'backbone-relational'
], function (Backbone) {
    'use strict';

    var MenuItemSizeModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/menu-item-size',
        idAttribute: '_id',
        defaults: {
            size: '',
            price: 0
        }
    });

    return MenuItemSizeModel;

});