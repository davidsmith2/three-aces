define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/screens/openMenus/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var OpenMenusRouter = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus': 'show'
        }
    });
    return new OpenMenusRouter();
});
