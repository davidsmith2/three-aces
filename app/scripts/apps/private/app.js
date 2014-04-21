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
            moduleManager.wake();
        },
        start: function () {
            console.log('data:get');
            $.when(dataManager.getCollection('openMenus')).done(function (openMenus) {
                Backbone.history.start();
                vent.trigger('module1:start', {
                    collection: openMenus,
                    route: '!/openmenus'
                });
            });
        }
    });
    return new PrivateApp();
});