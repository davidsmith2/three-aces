define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuGroups/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var Router = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus/:open_menu/menus/:menu/menugroups': 'show'
        }
    });
    return new Router();
});
