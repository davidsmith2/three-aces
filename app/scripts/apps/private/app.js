define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/manager',
    'apps/private/routes',
    'helpers/dataManager',
    'helpers/vent'
], function (Backbone, Marionette, $, _, moduleManager, routes, dataManager, vent) {
    var PrivateApp = Backbone.Marionette.Controller.extend({
        wake: function () {
            this.listenTo(vent, 'data:get', this.start);
        },
        start: function () {
            $.when(dataManager.getCollection('openMenus')).done(function (collection) {
                Backbone.history.start();
                vent.trigger('module:first', routes.route('openMenus', {collection: collection}));
            });
        }
    });
    return new PrivateApp();
});