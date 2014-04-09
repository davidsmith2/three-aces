define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail',
    'views/item/addRestaurant',
    'views/item/addEnvironment'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuDetailTmpl, AddRestaurantView, AddEnvironmentView) {
    'use strict';
	var OpenMenuDetailView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        initialize: function () {
            this.addRestaurantView = new AddRestaurantView({
                model: this.model.get('restaurantInfo')
            }).render();
            this.addEnvironmentView = new AddEnvironmentView({
                model: this.model.get('environment')
            }).render();
        },
        onRender: function () {
            this.$('#restaurantInfo').append(this.addRestaurantView.el);
            this.$('#environment').append(this.addEnvironmentView.el);
        }
    });
    return OpenMenuDetailView;
});
