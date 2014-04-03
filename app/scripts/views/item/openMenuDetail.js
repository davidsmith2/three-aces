define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail',
    'views/item/restaurantInfo',
    'views/item/environmentInfo',
    'views/item/addRestaurant'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuDetailTmpl, RestaurantInfoView, EnvironmentInfoView, AddRestaurantView) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        events: {
        },
        initialize: function () {
            this.restaurantInfoView = new RestaurantInfoView({
                model: this.model.get('restaurantInfo')
            });
            this.environmentInfoView = new EnvironmentInfoView({
                model: this.model.get('environmentInfo')
            });
            privateAppVent.on('restaurantInfo:edit', this.onRestaurantInfoEdit, this);
        },
        onRender: function () {
            this.$('#restaurantInfo').append(this.restaurantInfoView.render().el);
            this.$('#environmentInfo').append(this.environmentInfoView.render().el);
        },
        onRestaurantInfoEdit: function (options) {
            this.addRestaurantView = new AddRestaurantView({
                collection: this.restaurants,
                model: options.model,
                dialogId: options.dialogId
            });
            this._layout.dialog.show(this.addRestaurantView);
            this.listenTo(this.restaurants, 'add', this.restaurantsView.render);
        }
    });
});
