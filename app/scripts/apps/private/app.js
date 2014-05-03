define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/manager',
    'helpers/dataManager',
    'helpers/vent',
    'layouts/primary'
], function (Backbone, Marionette, $, _, moduleManager, dataManager, vent, PrimaryLayout) {
    var PrivateApp = Backbone.Marionette.Controller.extend({
        wake: function () {
            this.listenTo(vent, 'openMenus:show', this.start);
        },
        start: function () {
            var self = this;
            $.when(dataManager.getCollection('openMenus')).done(function (collection) {
                if (!Backbone.History.started) {
                    Backbone.history.start();
                }
                self.changeModule(collection);
            });
        },
        changeModule: function (collection) {
            vent.trigger('layout:container:showView', 'main', new PrimaryLayout());
            vent.trigger('module:load', 'openMenus', {collection: collection});
        }
    });
    return new PrivateApp();
});