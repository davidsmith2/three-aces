define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/item/restaurantInfo'
], function (Backbone, Marionette, $, _, privateAppVent, RestaurantInfoTmpl) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
        template: RestaurantInfoTmpl,
        ui: {},
        events: {
            'click a[href=#addRestaurant]': 'editRestaurantInfo'
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        editRestaurantInfo: function (e) {
            e.preventDefault();
            privateAppVent.trigger('restaurantInfo:edit', {
                model: this.model,
                dialogId: $(e.target).attr('href')
            });
        }
    });
});
