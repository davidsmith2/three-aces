define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/manager',
    'helpers/dataManager',
    'layouts/primary',
    'layouts/module',
    'vents/app',
    'vents/module'
], function (Backbone, Marionette, $, _, moduleManager, dataManager, PrimaryLayout, ModuleLayout, appVent, moduleVent) {
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