define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/vent',
    'apps/private/screens/openMenus/views/composite'
], function (Backbone, Marionette, $, _, vent, OpenMenusView) {
    'use strict';
    var OpenMenusController = Backbone.Marionette.Controller.extend({
        init: function (openMenus) {
            this.openMenus = openMenus;
            vent.on('openMenu:add', this.onAdd, this);
            vent.on('openMenu:edit', this.onEdit, this);
            vent.on('openMenu:delete', this.onDelete, this);
            return new OpenMenusView({
                collection: this.openMenus
            });
        },
        onAdd: function (openMenu) {
            var self = this;
            this.openMenus.create(openMenu, {
                success: function (model) {
                    self.onEdit(model);
                }
            });
        },
        onEdit: function (openMenu) {
            vent.trigger('nextPage', openMenu);
        },
        onDelete: function (openMenu) {
            openMenu.destroy();
        }
    });
    return new OpenMenusController();
});
