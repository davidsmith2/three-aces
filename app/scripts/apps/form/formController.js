define([
    'jquery',
    'backbone',
    'backbone.marionette',
    'apps/form/views/addMenuItem',
    'entities/menuItem',
    'communicator',
    'bootstrap'
], function ($, Backbone, Marionette, AddMenuItem, MenuItem, communicator) {
    'use strict';
    var FormController = Backbone.Marionette.Controller.extend({
        showView: function (vent, collections, modalId) {
            var view = new AddMenuItem({
                model: new MenuItem(),
                collections: collections,
                modalId: modalId
            });
            communicator.reqres.request('RM:getRegion', 'offscreenRegion').show(view);
        }
    });
    return new FormController();
});