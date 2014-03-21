define([
    'jquery',
    'backbone',
    'backbone.marionette',
    'apps/menuItems/form/views/addMenuItem',
    'entities/menuItem',
    'communicator',
    'bootstrap'
], function ($, Backbone, Marionette, AddMenuItem, MenuItem, communicator) {
    'use strict';
    var FormController = Backbone.Marionette.Controller.extend({
        showView: function (vent, menuItems, modalId) {
            var view = new AddMenuItem({
                model: new MenuItem(),
                collection: menuItems,
                modalId: modalId
            });
            communicator.reqres.request('RM:getRegion', 'offscreenRegion').show(view);
        }
    });
    return new FormController();
});