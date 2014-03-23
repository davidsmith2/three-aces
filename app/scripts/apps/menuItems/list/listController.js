define([
    'jquery',
    'backbone',
    'backbone.marionette',
    'apps/menuItems/list/views/menuItems',
    'communicator'
], function ($, Backbone, Marionette, MenuItems, communicator) {
    'use strict';
    var ListController = Backbone.Marionette.Controller.extend({
        showView: function (vent, collections) {
            var view = new MenuItems({
                collection: collections.menuItems
            });
            view.listenTo(collections.menuItemSizes, 'add', view.render);
            communicator.reqres.request('RM:getRegion', 'mainRegion').show(view);
        }
    });
    return new ListController();
});