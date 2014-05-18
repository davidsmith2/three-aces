define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/restaurant/views/form',
    'controllers/model'
], function (Backbone, Marionette, $, _, RestaurantView, ModelController) {
    'use strict';
    var RestaurantController = ModelController.extend({
        relatedViews: {
            body: RestaurantView
        },
        viewModels: {
            header: {
                title: 'Restaurant',
                description: 'Add some information about your restaurant.'
            },
            footer: {
                shortTitle: 'restaurant'
            }
        }
    });
    return new RestaurantController();
});
