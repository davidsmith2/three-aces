define([
    'backbone',
    'models/menu-item'
], function (Backbone, MenuItemModel) {
    'use strict';

    var MenuItemsCollection = Backbone.Collection.extend({
        url: '/api/menu-item',
        model: MenuItemModel
    });

    return MenuItemsCollection;

});