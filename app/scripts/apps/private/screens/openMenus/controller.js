define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/screens/openMenus/views/composite',
    'entities/models/openMenu'
], function (Backbone, Marionette, $, _, vent, OpenMenusView, OpenMenu) {
    'use strict';
    var OpenMenusController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        initialize: function () {
            vent.on('ui:openMenu:add', this.onAdd, this);
            vent.on('ui:openMenu:edit', this.onEdit, this);
            vent.on('ui:openMenu:delete', this.onDelete, this);
        },
        show: function () {

            console.log(this.collection)

            this.view = new OpenMenusView({
                collection: this.collection
            });
            vent.trigger('openMenus:show', {
                view: this.view
            });
        },
        onAdd: function () {
            this.collection.create(new OpenMenu(), {
                success: function (model) {
                    vent.trigger('openMenu:edit', {
                        model: model
                    });
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            vent.trigger('openMenu:edit', {
                model: model
            });
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
            this.view.render();
        }
    });
    return new OpenMenusController();
});
