define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/dataManager',
    'helpers/moduleManager',
    'vents/app',
    'vents/module'
], function (Backbone, Marionette, $, _, dataManager, moduleManager, appVent, moduleVent) {
    var PrivateApp = Backbone.Marionette.Controller.extend({
        wake: function () {
            this.listenTo(appVent, 'app:initialized', this.start);
        },
        start: function () {
            $.when(dataManager.getCollection('openMenus')).done(function (openMenus) {
                if (!Backbone.History.started) {
                    Backbone.history.start();
                }
                moduleVent.trigger('module:load', 'openMenus', {collection: openMenus});
            });
        }
    });
    return new PrivateApp();
});