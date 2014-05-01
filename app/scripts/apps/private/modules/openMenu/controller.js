define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/routes',
    'apps/private/screenHeaders',
    'views/generic/buttons',
    'views/generic/screenHeader',
    'apps/private/modules/openMenu/views/item'
], function (Backbone, Marionette, $, _, vent, routes, screenHeaders, ButtonsView, ScreenHeaderView, OpenMenuView) {
    'use strict';
    var OpenMenuController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        show: function () {
            this.view.header = this.getViewHeader();
            this.view.content = this.getViewContent();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                header: this.view.header,
                content: this.view.content,
                footer: this.view.footer
            });
        },
        getViewHeader: function () {
            return new ScreenHeaderView({
                model: new Backbone.Model(screenHeaders.openMenu)
            });
        },
        getViewContent: function () {
            return new OpenMenuView({
                model: this.model
            });
        },
        getViewFooter: function () {
            return new Backbone.View();
        }
    });
    return new OpenMenuController();
});
