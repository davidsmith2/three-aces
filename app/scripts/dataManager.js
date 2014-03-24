define([
    'jquery',
    'backbone',
    'communicator',
    'apps/entities/entitiesModule'
], function ($, Backbone, communicator) {
    'use strict';
    var DataManager = Backbone.Marionette.Controller.extend({
        getMenuItems: function () {
            return communicator.reqres.request('menuItems');
        },
        getMenuItemSizes: function () {
            return communicator.reqres.request('menuItemSizes');
        }
    });
    return new DataManager();
});