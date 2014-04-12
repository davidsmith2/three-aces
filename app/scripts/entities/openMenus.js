define([
    'backbone',
    'entities/openMenu'
], function (Backbone, OpenMenuModel) {
    'use strict';
    var OpenMenusCollection = Backbone.Collection.extend({
        model: OpenMenuModel,
        url: '/openmenus'
    });
    return OpenMenusCollection;
});