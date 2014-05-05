define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuItems/views/composite',
    'apps/private/modules/metadata',
    'entities/models/menuItem'
], function (Backbone, Marionette, $, _, vent, MenuItemsView, metadata, MenuItem) {
    'use strict';
    var MenuItemsController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        initialize: function () {
            vent.on('ui:menuItem:add', this.onAdd, this);
            vent.on('ui:menuItem:edit', this.onEdit, this);
            vent.on('ui:menuItem:delete', this.onDelete, this);
        },
        show: function () {
            var view = new MenuItemsView({
                collection: this.collection
            });
            vent.trigger('layout:menu:showView', 'menuItems', view);
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new MenuItem(), {
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
    return new MenuItemsController();
});
