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
        init: function (openMenu) {
            var view;
            this.openMenu = openMenu;
            this.menus = this.openMenu.get('menus');
            view = new MenusView({
                collection: this.menus
            });
            this.menus.fetch({
                success: function () {
                    view.render();
                }
            });
            vent.on('menu:add', this.onAdd, this);
            vent.on('menu:edit', this.onEdit, this);
            vent.on('menu:delete', this.onDelete, this);
            return view;
        },
        onAdd: function (menu) {
            var self = this;
            this.menus.create(menu, {
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
