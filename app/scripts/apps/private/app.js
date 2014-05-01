define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/manager',
    'helpers/dataManager',
    'helpers/vent'
], function (Backbone, Marionette, $, _, moduleManager, dataManager, vent) {
    var PrivateApp = Backbone.Marionette.Controller.extend({
        wake: function () {
            this.listenTo(vent, 'data:get', this.start);
        },
        start: function () {
            var self = this;
            $.when(dataManager.getCollection('openMenus')).done(function (collection) {
                if (!Backbone.History.started) {
                    Backbone.history.start();
                }
                self.show(collection);
            });
        },
        show: function (collection) {
            vent.trigger('module:load', 'openMenus', {collection: collection});
        }
    });
    return new PrivateApp();
});