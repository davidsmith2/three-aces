define([
    'backbone',
    'entities/openMenu'
], function (Backbone, OpenMenuModel) {
    'use strict';
    var OpenMenusCollection = Backbone.Collection.extend({
        model: OpenMenuModel,
        url: '/api/open-menus'
    });
    return OpenMenusCollection;
});