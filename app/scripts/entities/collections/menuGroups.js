define([
    'backbone',
    'entities/models/menuGroup'
], function (Backbone, MenuGroup) {
    'use strict';
    var MenuGroupCollection = Backbone.Collection.extend({
        model: MenuGroup,
        url: function () {
            var route = '/openmenus/' + this.menu.get('openMenu').get('_id') + '/menus/' + this.menu.get('_id') + '/menugroups';

            console.log(route)

            return route;
        }
    });
    return MenuGroupCollection;
});