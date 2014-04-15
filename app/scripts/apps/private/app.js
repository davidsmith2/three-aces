define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/vent',
    'apps/private/screens/openMenus/controller',
    'apps/private/screens/restaurant/controller',
    'apps/private/screens/environment/controller',
    'apps/private/screens/menus/controller',
    'apps/private/screens/menu/controller'
], function (Backbone, Marionette, $, _, vent, openMenusController, restaurantController, environmentController, menusController, menuController) {
    'use strict';
    var PrivateAppController = Backbone.Marionette.Controller.extend({
        controllers: [
            openMenusController,
            restaurantController,
            environmentController,
            menusController,
            menuController
        ],
        currentPage: 0,
        setData: function (data) {
            this.data = data;
            vent.on('nextPage', this.nextPage, this);
        },
        init: function (region) {
            this.region = region;
            this.nextPage(this.data);
        },
        nextPage: function (data) {
            var view = this.controllers[this.currentPage].init(data);
            this.currentPage++;
            this.region.show(view);
        }
    });
    return new PrivateAppController();
});
