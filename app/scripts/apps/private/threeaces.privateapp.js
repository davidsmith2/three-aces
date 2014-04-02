define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'views/composite/restaurants',
    'views/item/addRestaurant'
], function (Backbone, Marionette, $, _, privateAppVent, RestaurantsView, AddRestaurantView) {
    'use strict';
    var PrivateApp = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('restaurant:add', this.addRestaurant, this);
            privateAppVent.on('restaurant:edit', this.editRestaurant, this);
            privateAppVent.on('restaurant:delete', this.deleteRestaurant, this);
        },
        setData: function (restaurants) {
            this.restaurants = restaurants;
        },
        init: function (layout) {
            var restaurantsView = new RestaurantsView({
                collection: this.restaurants
            });
            this._layout = layout;
            this._layout.main.show(restaurantsView);
        },
        addRestaurant: function (options) {
            var addRestaurantView = new AddRestaurantView({
                collection: this.restaurants,
                model: options.model,
                dialogId: options.dialogId
            });
            this._layout.dialog.show(addRestaurantView);
        },
        editRestaurant: function (options) {
            this.addRestaurant(options);
        },
        deleteRestaurant: function (options) {
            options.model.destroy();
        }
    });
    return new PrivateApp();
});
