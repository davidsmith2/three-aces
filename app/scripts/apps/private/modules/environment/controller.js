define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/environment/views/form',
    'apps/private/modules/metadata',
    'views/generic/mainHeader',
    'views/generic/mainNav'
], function (Backbone, Marionette, $, _, vent, EnvironmentView, metadata, MainHeaderView, MainNavView) {
    'use strict';
    var EnvironmentController = Backbone.Marionette.Controller.extend({
        model: {},
        views: {
            nav: {},
            header: {},
            body: {},
            footer: {}
        },
        show: function () {
            this.views.header = this.getHeaderView();
            this.views.body = this.getBodyView();
            this.views.footer = this.getFooterView();
            this.views.nav = this.getNavView();
            vent.trigger('layout:secondary:showViews', this.views);
        },
        getNavView: function () {
            return new MainNavView({
                model: this.model
            });
        },
        getHeaderView: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.environment)
            });
        },
        getBodyView: function () {
            return new EnvironmentView({
                model: this.model.get('environment')
            });
        },
        getFooterView: function () {
            return new Backbone.View();
        }
    });
    return new EnvironmentController();
});
