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
	return Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        events: {
        },
        initialize: function () {
            privateAppVent.on('restaurantInfo:edit', this.onRestaurantInfoEdit, this);
        },
        onRender: function () {
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
