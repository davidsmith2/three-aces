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
            this.view.body = this.getViewBody();
            vent.trigger('screen:show', {
                body: this.view.body
            });
        },
        getViewBody: function () {
            return new OpenMenusView({
                collection: this.collection
            });
        },
        onAdd: function () {
            this.collection.create(new OpenMenu(), {
                success: function (model) {
                    vent.trigger('module:2:init', {
                        model: model
                    });
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            vent.trigger('module:2:init', {
                model: model
            });
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
            this.view.body.render();
        }
    });
    return new OpenMenusController();
});
