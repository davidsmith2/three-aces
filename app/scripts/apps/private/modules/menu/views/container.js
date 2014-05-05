define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menu/views/form',
    'helpers/vent',
    'hbs!tmpl/private/screens/menu/item',
    'bootstrap'
], function (Backbone, Marionette, $, _, FormView, vent, Template) {
    'use strict';
	var MenuContainerView = Backbone.Marionette.ItemView.extend({
        template: Template,
        collections: {
            menuGroups: {},
            menuItems: {}
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
            this.loadMenuItems();
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
        loadMenuItems: function () {
            var self = this;
            this.collections.menuItems = this.model.get('menuItems');
            this.collections.menuItems.fetch({
                success: function (_menuItems) {
                    vent.trigger('module:load', 'menuItems', {
                        model: self.model,
                        collection: _menuItems
                    });
                }
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
