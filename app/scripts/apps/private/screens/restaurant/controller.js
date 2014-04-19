define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/screens/restaurant/views/form',
    'views/generic/buttons'
], function (Backbone, Marionette, $, _, vent, RestaurantView, ButtonsView) {
    'use strict';
    var RestaurantController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        initialize: function () {
            this.listenTo(vent, 'next:module', this.onNext);
            this.listenTo(vent, 'previous:module', this.onPrevious);
        },
        show: function () {
            this.view.body = this.getViewBody();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                body: this.view.body,
                footer: this.view.footer
            });
        },
        getViewBody: function () {
            return new RestaurantView({
                model: this.model.get('restaurantInfo')
            });
        },
        getViewFooter: function () {
            return new ButtonsView({
                model: this.model
            });
        },
        onNext: function (model) {
            vent.trigger('module:3:init', {
                model: model
            });
        },
        onPrevious: function (model) {
            console.log(model)
        }
    });
    return new RestaurantController();
});
