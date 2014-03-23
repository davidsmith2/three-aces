define([
    'backbone',
    'entities/menuItem'
], function (Backbone, MenuItem) {
    'use strict';
    var MenuItems = Backbone.Collection.extend({
        model: MenuItem,
        url: '/api/menu-items',
        comparator: 'category'
    });
    return MenuItems;
});