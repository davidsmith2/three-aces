define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menu/views/form',
    'apps/private/modules/menuGroups/views/composite',
    'apps/private/modules/menuItems/views/composite',
    'helpers/vent',
    'hbs!tmpl/private/screens/menu/item'
], function (Backbone, Marionette, $, _, FormView, MenuGroupsView, MenuItemsView, vent, Template) {
    'use strict';
	var MenuView = Backbone.Marionette.ItemView.extend({
        template: Template,
        collections: {
            menuGroups: {},
            menuItems: new Backbone.Collection()
        },
        views: {
            menu: {},
            menuGroups: {},
            menuItems: {}
        },
        initialize: function () {
            this.listenTo(vent, 'showView', this.showView);
        },
        onRender: function () {
            this.getMenuView();
            this.getMenuGroupsView();
            this.listenTo(this.collections.menuGroups, 'sync', this.getMenuItemsView);
        },
        getMenuView: function () {
            this.views.menu = new FormView({
                model: this.model
            }).render().el;
            vent.trigger('showView', 'menu', this.views.menu);
        },
        getMenuGroupsView: function () {
            var self = this;
            this.collections.menuGroups = this.model.get('menuGroups');
            this.collections.menuGroups.fetch({
                success: function (_menuGroups) {
                    self.views.menuGroups = new MenuGroupsView({
                        collection: _menuGroups
                    }).render().el;
                    vent.trigger('showView', 'menu-groups', self.views.menuGroups);
                }
            });
        },
        getMenuItemsView: function (_menuGroups) {
            var self = this;
            _menuGroups.each(function (_menuGroup) {
                var menuItems = _menuGroup.get('menuItems');
                menuItems.fetch({
                    success: function (_menuItems) {
                        self.collections.menuItems.add(_menuItems.models);
                        if (!self.views.menuItems.el) {
                            self.views.menuItems = new MenuItemsView({
                                collection: self.collections.menuItems
                            }).render().el;
                        }
                        vent.trigger('showView', 'menu-items', self.views.menuItems);
                    }
                });
            });
        },
        showView: function (id, view) {
            this.$('#' + id).html(view);
        }
    });
    return MenuView;
});
