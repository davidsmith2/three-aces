define([
    'backbone'
], function (Backbone) {
    'use strict';

    var MenuItemModel = Backbone.Model.extend({
        defaults: {
            name: '',
            description: '',
            category: '',
            price: null,
            sizeName: null,
            sizePrice: null
        }
    });

    return MenuItemModel;

});