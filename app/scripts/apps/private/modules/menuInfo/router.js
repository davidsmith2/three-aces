define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuInfo/controller'
], function (Backbone, Marionette, $, _, controller) {
    'use strict';
    var Router = Backbone.Marionette.AppRouter.extend({
        controller: controller,
        appRoutes: {
            '!/openmenus/:open_menu/menus/:menu/menuinfo': 'show'
        }
    });
    return new Router();
});
