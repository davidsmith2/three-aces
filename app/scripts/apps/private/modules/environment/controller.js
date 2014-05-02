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
        view: {},
        show: function () {
            this.view.nav = this.getViewNav();
            this.view.header = this.getViewHeader();
            this.view.content = this.getViewContent();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                nav: this.view.nav,
                header: this.view.header,
                content: this.view.content,
                footer: this.view.footer
            });
        },
        getViewNav: function () {
            return new MainNavView({
                model: this.model
            });
        },
        getViewHeader: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.environment)
            });
        },
        getViewContent: function () {
            return new EnvironmentView({
                model: this.model.get('environment')
            });
        },
        getViewFooter: function () {
            return new Backbone.View();
        }
    });
    return new EnvironmentController();
});
