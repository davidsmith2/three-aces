define([
    'backbone',
    'entities/menuGroup'
], function (Backbone, MenuGroupModel) {
    'use strict';
    var MenuGroupsCollection = Backbone.Collection.extend({
        model: MenuGroupModel,
        url: '/api/omfs/:id/menus/:id/menu-groups'
    });
    return MenuGroupsCollection;
});