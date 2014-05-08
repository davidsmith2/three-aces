define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/restaurant/views/form',
    'controllers/model',
    'layouts/secondary'
], function (Backbone, Marionette, $, _, RestaurantView, ModelController, SecondaryLayout) {
    'use strict';
    var RestaurantController = ModelController.extend({
        relatedLayout: SecondaryLayout,
        relatedViews: {
            body: RestaurantView
        },
        viewModels: {
            header: {
                title: 'Restaurant',
                description: 'Add some information about your restaurant.',
                shortTitle: 'restaurant'
            }
        }
    });
    return new RestaurantController();
});
