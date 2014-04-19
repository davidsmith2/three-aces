define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/controller'
], function (Backbone, Marionette, $, _, frontController) {
    'use strict';
    var Router = Backbone.Marionette.AppRouter.extend({
        controller: frontController,
        appRoutes: {
            '*path': 'defaultRoute'
        }
    });
    return new Router();
});
