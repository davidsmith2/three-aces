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
    var PrivateApp = function () {};
    PrivateApp.prototype.wake = function () {
        module1.wake();
        module2.wake();
        module3.wake();
        module4.wake();
        vent.on('data:get', function () {
            console.log('data:get');
            $.when(dataManager.getCollection('openMenus')).done(function (openMenus) {
                Backbone.history.start();
                vent.trigger('module1:start', {
                    collection: openMenus,
                    route: '!/openmenus'
                });
            });
        });
    };
    return new PrivateApp();
});