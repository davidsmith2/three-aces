define([
    'backbone',
    'backbone.marionette',
    'apps/menuItems/nav/navView',
    'communicator'
], function (Backbone, Marionette, NavView, communicator) {
    'use strict';
    var NavController = Backbone.Marionette.Controller.extend({
        showView: function () {
            var view = new NavView();
            communicator.reqres.request('RM:getRegion', 'navRegion').show(view);
            return view;
        }
    });
    return new NavController();
});