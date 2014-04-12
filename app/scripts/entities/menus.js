define([
    'backbone',
    'entities/menu'
], function (Backbone, MenuModel) {
    'use strict';
    var MenusCollection = Backbone.Collection.extend({
        model: MenuModel
    });
    return MenusCollection;
});