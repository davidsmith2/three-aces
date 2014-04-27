define([
    'backbone',
    'entities/models/menu'
], function (Backbone, MenuModel) {
    'use strict';
    var MenuCollection = Backbone.Collection.extend({
        model: MenuModel,
        url: function () {
            var route = '/openmenus/' + this.openMenu.get('_id') + '/menus';

            console.log(route)

            return route;
        }
    });
    return MenuCollection;
});