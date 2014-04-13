define([
    'backbone',
    'entities/models/menuGroup'
], function (Backbone, MenuGroup) {
    'use strict';
    var MenuGroupCollection = Backbone.Collection.extend({
        model: MenuGroup,
        url: '/api/omfs/:id/menus/:id/menu-groups'
    });
    return MenuGroupCollection;
});