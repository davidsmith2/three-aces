define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menu/views/form',
    'apps/private/modules/menuItems/views/composite',
    'helpers/vent',
    'hbs!tmpl/private/screens/menu/item',
    'bootstrap'
], function (Backbone, Marionette, $, _, FormView, MenuItemsView, vent, Template) {
    'use strict';
	var MenuContainerView = Backbone.Marionette.ItemView.extend({
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
        events: {
            'click .nav a': 'onTabClick',
        },
        initialize: function () {
            this.listenTo(vent, 'showView', this.showView);
        },
        onRender: function () {
            this.loadMenu();
            this.loadMenuGroups();
            this.listenTo(this.collections.menuGroups, 'sync', this.loadMenuItems);
        },
        loadMenu: function () {
            this.views.menu = new FormView({
                model: this.model
            }).render().el;
            vent.trigger('showView', 'menu', this.views.menu);
        },
        loadMenuGroups: function () {
            var self = this;
            this.collections.menuGroups = this.model.get('menuGroups');
            this.collections.menuGroups.fetch({
                success: function (_menuGroups) {
                    vent.trigger('module:load', 'menuGroups', {
                        model: self.model,
                        collection: _menuGroups
                    });
                }
            });
        },
        loadMenuItems: function (_menuGroups) {
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
        },
        onTabClick: function (e) {
            e.preventDefault();
            this.showTab($(e.target));
        },
        showTab: function ($el) {
            $el.tab('show');
        }
    });
    return MenuContainerView;
});
