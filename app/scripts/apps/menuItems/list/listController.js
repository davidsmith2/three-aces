define([
    'jquery',
    'backbone',
    'backbone.marionette',
    'apps/menuItems/list/views/menuItems',
    'communicator'
], function ($, Backbone, Marionette, MenuItems, communicator) {
    'use strict';
    var ListController = Backbone.Marionette.Controller.extend({
        showView: function (vent, menuItems) {
            var view = new MenuItems({
                collection: menuItems
            });
            communicator.reqres.request('RM:getRegion', 'mainRegion').show(view);
        }
    });
    return new ListController();
});