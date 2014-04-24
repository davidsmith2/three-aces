define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore'
], function (Backbone, Marionette, $, _) {
    'use strict';
    var AppRouter = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '!/openmenus': 'show',
            '!/openmenus/:id/restaurant': 'show',
            '!/openmenus/:id/environment': 'show',
            '!/openmenus/:id/menus': 'show'
        }
    });
    return AppRouter;
});
