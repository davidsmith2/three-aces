define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/restaurant/views/form',
    'apps/private/modules/metadata',
    'views/generic/mainHeader',
    'views/generic/mainNav'
], function (Backbone, Marionette, $, _, vent, RestaurantView, metadata, MainHeaderView, MainNavView) {
    'use strict';
    var RestaurantController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        show: function () {
            this.view.nav = this.getViewNav();
            this.view.header = this.getViewHeader();
            this.view.content = this.getViewContent();
            this.view.footer = this.getViewFooter();
            vent.trigger('module:change', {
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
                model: new Backbone.Model(metadata.restaurant)
            });
        },
        getViewContent: function () {
            return new RestaurantView({
                model: this.model.get('restaurantInfo')
            });
        },
        getViewFooter: function () {
            return new Backbone.View();
        }
    });
    return new RestaurantController();
});
