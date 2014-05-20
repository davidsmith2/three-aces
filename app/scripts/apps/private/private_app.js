define([
    'app'
], function (App) {

    App.module('PrivateApp', function (PrivateApp, App, Backbone, Marionette, $, _) {

        PrivateApp.on('start', function () {
            console.log('PrivateApp is starting');
            require([
                'apps/private/apps/open_menus/open_menus_app'
            ], function () {
                PrivateApp.trigger('openMenus:list');
            });
        });

        PrivateApp.on('stop', function () {
            console.log('PrivateApp is stopping');
        });

    });

    return App.PrivateApp;

});