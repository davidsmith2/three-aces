define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menu/views/item',
    'apps/private/modules/metadata',
    'views/generic/mainHeader',
    'views/generic/mainNav'
], function (Backbone, Marionette, $, _, vent, MenuView, metadata, MainHeaderView, MainNavView) {
    'use strict';
    var MenuController = Backbone.Marionette.Controller.extend({
        model: {},
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
            return new MenuView({
                model: this.model
            });
        },
        getFooterView: function () {
            return new Backbone.View();
        }
    });
    return new MenuController();
});
