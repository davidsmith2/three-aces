define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/modules/private/restaurant/item'
], function (Backbone, Marionette, $, _, RestaurantTmpl) {
    'use strict';
	var RestaurantView = Backbone.Marionette.ItemView.extend({
        template: RestaurantTmpl
    });
    return RestaurantView;
});
