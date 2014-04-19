define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/environment/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var EnvironmentRouter = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus/:id/edit/environment': 'show'
        }
    });
    return new EnvironmentRouter();
});
