define([
    'backbone',
    'entities/menuItem'
], function (Backbone, MenuItem) {
    'use strict';
    var MenuItems = Backbone.Collection.extend({
        url: '/api/menu-item',
        model: MenuItem
    });
    return MenuItems;
});