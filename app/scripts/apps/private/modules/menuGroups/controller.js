define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuGroups/views/composite',
    'apps/private/modules/metadata',
    'entities/models/menuGroup'
], function (Backbone, Marionette, $, _, vent, MenuGroupsView, metadata, MenuGroup) {
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
            var view = new MenuGroupsView({
                collection: this.collection
            });
            vent.trigger('layout:menu:showView', 'menuGroups', view);
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new MenuGroup(), {
                success: function (model) {
                    //self.onNext(model);
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            //this.onNext(model);
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
        }
    });
    return new MenuGroupsController();
});
