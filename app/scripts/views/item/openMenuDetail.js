define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail2',
    'views/item/addRestaurant'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuDetailTmpl, AddRestaurantView) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        events: {
            'click a[href=#addRestaurant]': 'editRestaurantInfo'
        },
        initialize: function () {
            this.addRestaurantView = new AddRestaurantView({
                model: this.model.get('restaurantInfo')
            }).render();
            //privateAppVent.on('restaurantInfo:edit', this.onRestaurantInfoEdit, this);
            //this.listenTo(this.model.get('restaurantInfo'), 'change', this.render);
        },
        onRender: function () {
            this.$('#restaurantInfo').append(this.addRestaurantView.el);
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
