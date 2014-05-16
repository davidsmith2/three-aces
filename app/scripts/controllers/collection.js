define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'controllers/module',
    'vents/module',
    'vents/ui'
], function (Backbone, Marionette, $, _, ModuleController, moduleVent, uiVent) {
    'use strict';
    var CollectionController = ModuleController.extend({
        collection: {},
        relatedModel: {},
        initialize: function () {
            this.listenTo(uiVent, 'ui:add', this.onAdd);
            this.listenTo(uiVent, 'ui:edit', this.onEdit);
            this.listenTo(uiVent, 'ui:delete', this.onDelete);
        },
        getBodyView: function () {
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
