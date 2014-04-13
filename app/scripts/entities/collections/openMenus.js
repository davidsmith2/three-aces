define([
    'backbone',
    'entities/models/openMenu'
], function (Backbone, OpenMenuModel) {
    'use strict';
    var OpenMenuCollection = Backbone.Collection.extend({
        model: OpenMenuModel,
        url: '/openmenus'
    });
    return OpenMenuCollection;
});