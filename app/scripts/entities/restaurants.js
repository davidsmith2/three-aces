define([
    'backbone',
    'entities/restaurant'
], function (Backbone, RestaurantModel) {
    'use strict';
    var RestaurantsCollection = Backbone.Collection.extend({
        model: RestaurantModel,
        url: '/api/restaurants'
    });
    return RestaurantsCollection;
});