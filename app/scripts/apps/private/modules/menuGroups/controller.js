define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuGroups/views/composite',
    'apps/private/modules/metadata',
    'entities/models/menuGroup',
    'layouts/dialog'
], function (Backbone, Marionette, $, _, vent, MenuGroupsView, metadata, MenuGroup, DialogLayout) {
    'use strict';
    var MenuGroupsController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        initialize: function () {
            vent.on('ui:menuGroup:add', this.onAdd, this);
            vent.on('ui:menuGroup:edit', this.onEdit, this);
            vent.on('ui:menuGroup:delete', this.onDelete, this);
        },
        show: function () {
            this.view = new MenuGroupsView({
                collection: this.collection
            });
            vent.trigger('layout:menu:tabs:showView', 'menuGroups', this.view);
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new MenuGroup(), {
                success: function (model) {
                    self.changeModule(model);
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            this.changeModule(model);
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
        },
        changeModule: function (model) {
            vent.trigger('layout:container:showView', 'dialog', new DialogLayout());
            vent.trigger('module:load', 'menuGroup', {model: model});
        }
    });
    return new MenuGroupsController();
});
