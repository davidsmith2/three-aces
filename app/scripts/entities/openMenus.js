define([
    'backbone',
    'entities/openMenu'
], function (Backbone, OpenMenuModel) {
    'use strict';
    return Backbone.Collection.extend({
        model: OpenMenuModel,
        url: '/api/open-menus'
    });
});