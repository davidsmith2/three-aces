define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/screens/menus/views/composite'
], function (Backbone, Marionette, $, _, vent, MenusView) {
    'use strict';
    var MenusController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        init: function () {
            vent.on('menu:add', this.onAdd, this);
            vent.on('menu:edit', this.onEdit, this);
            vent.on('menu:delete', this.onDelete, this);
        },
        show: function () {
            this.view.body = this.getViewBody();
            vent.trigger('screen:show', {
                body: this.view.body
            });
        },
        getViewBody: function () {
            return new MenusView({
                collection: this.collection
            });
        },
        onAdd: function (menu) {
            var self = this;
            this.collection.create(menu, {
                success: function (model) {
                    self.onEdit(model);
                }
            });
        },
        onEdit: function (menu) {
            vent.trigger('nextScreen', menu);
        },
        onDelete: function (menu) {
            menu.destroy();
        }
    });
    return new MenusController();
});
