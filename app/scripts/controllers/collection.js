define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'controllers/module'
], function (Backbone, Marionette, $, _, ModuleController) {
    'use strict';
    var CollectionController = ModuleController.extend({
        collection: {},
        relatedModel: {},
        getModuleBodyView: function () {
            return new this.relatedViews.body({
                collection: this.collection
            });
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new this.relatedModel(), {
                success: function (model) {
                    self.onAddOrEdit(model);
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            this.onAddOrEdit(model);
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
        }
    });
    return CollectionController;
});
