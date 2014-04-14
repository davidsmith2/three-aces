define([
    'backbone',
    'entities/models/menu'
], function (Backbone, MenuModel) {
    'use strict';
    var MenuCollection = Backbone.Collection.extend({
        model: MenuModel,
        url: function () {
            return '/openmenus/' + this.openMenu.get('_id') + '/menus';
        }
    });
    return MenuCollection;
});