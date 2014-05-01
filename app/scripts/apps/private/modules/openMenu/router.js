define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/openMenu/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var Router = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus/:id': 'show'
        }
    });
    return new Router();
});
