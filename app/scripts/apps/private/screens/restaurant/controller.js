define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/vent',
    'apps/private/screens/restaurant/views/form'
], function (Backbone, Marionette, $, _, vent, RestaurantView) {
    'use strict';
    var RestaurantController = Backbone.Marionette.Controller.extend({
        init: function (openMenu) {
            var view;
            this.openMenu = openMenu;
            this.restaurantInfo = this.openMenu.get('restaurantInfo');
            view = new RestaurantView({
                model: this.restaurantInfo
            });
            this.listenTo(view, 'restaurant:submit', this.onSubmit);
            return view;
        },
        onSubmit: function () {
            vent.trigger('nextPage', this.openMenu);
        }
    });
    return new RestaurantController();
});
