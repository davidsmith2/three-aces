define([
    'backbone'
], function (Backbone) {
    'use strict';

    var MenuItemSizeModel = Backbone.Model.extend({
        defaults: {
            size: '',
            price: 0
        }
    });

    return MenuItemSizeModel;

});