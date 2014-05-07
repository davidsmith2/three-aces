define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menu/layouts/tabs',
    'apps/private/modules/metadata',
    'helpers/vent',
    'views/mainHeader',
    'views/mainNav'
], function (Backbone, Marionette, $, _, TabsLayout, metadata, vent, MainHeaderView, MainNavView) {
    'use strict';
    var FuckController = Backbone.Marionette.Controller.extend({
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
            var tabsLayout = new TabsLayout();
            this.listenTo(tabsLayout, 'layout:menu:tabs:rendered', this.loadModule);
            this.listenTo(tabsLayout, 'ui:menu:tab:clicked', this.loadModule);
            return tabsLayout;
        },
        getFooterView: function () {
            return new Backbone.View();
        },
        loadModule: function (moduleName) {
            this['load' + moduleName]();
        },
        loadMenuInfo: function () {
            vent.trigger('module:load', 'menuInfo', {model: this.model});
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
    return new FuckController();
});
