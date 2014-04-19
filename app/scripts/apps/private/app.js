define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/screens/openMenus/module',
    'apps/private/screens/restaurant/module',
    'apps/private/screens/environment/module',
    'apps/private/screens/menus/module',
    'helpers/dataManager',
    'helpers/vent'
], function (Backbone, Marionette, $, _, module1, module2, module3, module4, dataManager, vent) {
    var PrivateApp = Backbone.Marionette.Controller.extend({
        modules: {
            openMenus: module1,
            restaurant: module2,
            environment: module3,
            menus: module4
        },
        wake: function (options) {
            this.wakeModules(options.modules);
            this.listenTo(vent, 'data:get', this.start);
        },
        wakeModules: function (modules) {
            for (var i = 0, len = modules.length; i < len; i++) {
                this.modules[modules[i]].wake();
            }
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