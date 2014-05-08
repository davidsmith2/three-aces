define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'controllers/module'
], function (Backbone, Marionette, $, _, ModuleController) {
    'use strict';
    var ModelController = ModuleController.extend({
        model: {},
        getBodyView: function () {
            return new this.relatedViews.body({
                model: this.model
            });
        }
    });
    return ModelController;
});
