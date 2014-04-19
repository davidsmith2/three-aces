define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/screens/menus/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var MenusRouter = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus/:id/menus': 'show'
        }
    });
    return new MenusRouter();
});
