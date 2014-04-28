define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuItem/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var Router = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus/:openMenuId/menus/:menuId/menugroups/:menuGroupId/menuitems/:menuItemId': 'show'
        }
    });
    return new Router();
});
