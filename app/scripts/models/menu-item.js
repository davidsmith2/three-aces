define([
    'backbone'
], function (Backbone) {
    'use strict';

    var MenuItemModel = Backbone.Model.extend({
        defaults: {
            name: '',
            description: '',
            category: '',
            price: 0,
            sizeName: '',
            sizePrice: 0
        }
    });

    return MenuItemModel;

});