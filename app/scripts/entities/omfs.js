define([
    'backbone',
    'entities/omf'
], function (Backbone, OmfModel) {
    'use strict';
    var OmfsCollection = Backbone.Collection.extend({
        model: OmfModel,
        url: '/api/omfs'
    });
    return OmfsCollection;
});