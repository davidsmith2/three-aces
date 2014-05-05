define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menu/views/form',
    'apps/private/modules/metadata',
    'views/generic/mainHeader',
    'views/generic/mainNav',
    'layouts/menu'
], function (Backbone, Marionette, $, _, vent, MenuView, metadata, MainHeaderView, MainNavView, MenuLayout) {
    'use strict';
    var MenuController = Backbone.Marionette.Controller.extend({
        model: {},
        collections: {
            menuGroups: {},
            menuItems: {}
        },
        views: {
            nav: {},
            header: {},
            body: {},
            footer: {}
        },
        initialize: function () {
            this.listenTo(vent, 'controller:menu:loadModule', this.loadModule);
        },
        show: function () {
            this.views.nav = this.getNavView();
            this.views.header = this.getHeaderView();
            this.views.body = this.getBodyView();
            this.views.footer = this.getFooterView();
            vent.trigger('layout:secondary:showViews', this.views);
        },
        getNavView: function () {
            return new MainNavView({
                model: this.model.get('openMenu')
            });
        },
        getHeaderView: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.menu)
            });
        },
        getBodyView: function () {
            return new MenuLayout();
        },
        getFooterView: function () {
            return new Backbone.View();
        },
        loadModule: function (moduleName) {
            this['load' + moduleName]();
        },
        loadMenu: function () {
            var view = new MenuView({
                model: this.model
            });
            vent.trigger('layout:menu:showView', 'menu', view);
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
        }
    });
    return new MenuController();
});
