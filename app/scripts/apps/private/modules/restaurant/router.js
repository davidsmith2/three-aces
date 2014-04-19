define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/restaurant/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var RestaurantRouter = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus/:id/edit/restaurant': 'show'
        }
    });
    return new RestaurantRouter();
});
