define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail',
    'views/item/addRestaurant'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuDetailTmpl, AddRestaurantView) {
    'use strict';
	var OpenMenuDetailView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        initialize: function () {
            var restaurantInfoModel = this.model.get('restaurantInfo');
            this.addRestaurantView = new AddRestaurantView({
                model: restaurantInfoModel
            }).render();
        },
        onRender: function () {
            this.$('#restaurantInfo').append(this.addRestaurantView.el);
        }
    });
    return OpenMenuDetailView;
});
