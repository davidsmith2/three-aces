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
            communicator.reqres.setHandler("DM:getData", this.getData, this);
        },
        getData: function (name, params) {
            return this._callbacks['get' + name](params);
        }
    });
    return new DataManager();
});