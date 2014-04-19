define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/screens/restaurant/views/form'
], function (Backbone, Marionette, $, _, vent, RestaurantView) {
    'use strict';
    var RestaurantController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        initialize: function () {},
        show: function () {
            this.view = new RestaurantView({
                model: this.model.get('restaurantInfo')
            });
            vent.trigger('restaurant:show', {
                model: this.model,
                view: this.view
            });
        },
        onSave: function () {
            vent.trigger('restaurant:submit', this.model);
        }
    });
    return new RestaurantController();
});
