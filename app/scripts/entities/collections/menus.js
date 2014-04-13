define([
    'backbone',
    'entities/models/menu'
], function (Backbone, MenuModel) {
    'use strict';
    var MenuCollection = Backbone.Collection.extend({
        model: MenuModel
    });
    return MenuCollection;
});