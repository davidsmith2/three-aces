define([
    'app'
], function (App) {
    App.module('PrivateApp', function (PrivateApp, App, Backbone, Marionette, $, _) {
        PrivateApp.startWithParent = false;
        PrivateApp.on('start', function () {
            console.log('the private app is starting');
            require([
                'apps/private/apps/open_menus/app'
            ], function () {
                App.vent.trigger('openMenus:index');
            });
        });
        PrivateApp.on('stop', function () {
            console.log('the private app is stopping');
        });
    });
    return App.PrivateApp;
});
