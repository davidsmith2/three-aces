define([
    'backbone',
    'models/menu-item'
], function (Backbone, MenuItem) {
    'use strict';

    var MenuItemsCollection = Backbone.Collection.extend({
        model: MenuItem,
        url: '/api/menu-item'
    });

    return MenuItemsCollection;

});