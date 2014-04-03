define([
    'backbone',
    'entities/menu'
], function (Backbone, MenuModel) {
    'use strict';
    var MenusCollection = Backbone.Collection.extend({
        model: MenuModel,
        url: '/api/open-menus/:id/menus'
    });
    return MenusCollection;
});