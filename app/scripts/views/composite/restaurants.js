define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'entities/restaurant',
    'hbs!tmpl/composite/restaurants',
    'views/item/restaurant'
], function (Backbone, Marionette, $, _, privateAppVent, RestaurantModel, RestaurantsTmpl, RestaurantView) {
    'use strict';
    return Backbone.Marionette.CompositeView.extend({
        itemView: RestaurantView,
        template: RestaurantsTmpl,
        ui: {},
        itemViewContainer: "tbody",
        events: {
            'click .btn': 'addRestaurant'
        },
        addRestaurant: function (e) {
            e.preventDefault();
            privateAppVent.trigger('restaurant:add', {
                model: new RestaurantModel(),
                dialogId: $(e.target).attr('href')
            });
        }
    });
});
