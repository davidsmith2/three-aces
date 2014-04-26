define([
    'backbone',
    'entities/models/menuGroup'
], function (Backbone, MenuGroup) {
    'use strict';
    var MenuGroupCollection = Backbone.Collection.extend({
        model: MenuGroup,
        url: function () {
            return '/openmenus/' + this.openMenu.get('openMenu').get('_id') + '/menus/' + this.openMenu.get('_id') + '/menugroups';
        }
    });
    return MenuGroupCollection;
});