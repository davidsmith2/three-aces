define([
    'jquery',
    'backbone',
    'communicator',
    'modules/entities'
], function ($, Backbone, communicator, entities) {
    'use strict';
    var DataManager = Backbone.Marionette.Controller.extend({
        initialize: function () {
            this._callbacks = entities;
        },
        getMenuItems: function () {
            return communicator.reqres.request('menuItems');
        },
        getMenuItemSizes: function () {
            return communicator.reqres.request('menuItemSizes');
        }
    });
    return new DataManager();
});