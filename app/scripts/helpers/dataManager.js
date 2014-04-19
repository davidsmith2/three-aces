define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'entities/collections/openMenus',
    'helpers/communicator'
], function (Backbone, Marionette, $, _, OpenMenuCollection, communicator) {
    'use strict';
    var _API = {
        collections: {
            openMenus: OpenMenuCollection
        },
        setHandlers: function () {
            for (var name in this.collections) {
                this.setHandler(name);
            }
        },
        setHandler: function (name) {
            var self = this;
            communicator.reqres.setHandler(name, function () {
                return self.getCollection(name);
            });
        },
        getCollection: function (name) {
            var collection = new this.collections[name]();
            var dfd = $.Deferred();
            collection.fetch({
                success: dfd.resolve
            });
            return dfd.promise();
        }
    };

    var API = {
        getCollection: function (name) {
            return communicator.reqres.request(name);
        }
    };
    _API.setHandlers();
    return API;
});