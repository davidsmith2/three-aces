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
                model: this.model
            });
        },
        getHeaderView: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.restaurant)
            });
        },
        getBodyView: function () {
            return new RestaurantView({
                model: this.model.get('restaurantInfo')
            });
        },
        getFooterView: function () {
            return new Backbone.View();
        }
    });
    return new RestaurantController();
});
