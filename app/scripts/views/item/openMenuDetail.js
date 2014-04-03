define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuDetailTmpl) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        events: {
            'click a[href=#addRestaurant]': 'editRestaurantInfo'
        },
        initialize: function () {
            privateAppVent.on('restaurantInfo:edit', this.onRestaurantInfoEdit, this);
            this.listenTo(this.model.get('restaurantInfo'), 'change', this.render);
        },
        editRestaurantInfo: function (e) {
            e.preventDefault();
            privateAppVent.trigger('restaurantInfo:edit', {
                model: this.model.get('restaurantInfo'),
                dialogId: $(e.target).attr('href')
            });
        }
    });
});
