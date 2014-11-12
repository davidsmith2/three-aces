define([
    'jquery',
    'app',
    'entities/open_menu'
], function ($, App) {
    App.module('PrivateApp', function (PrivateApp) {
        PrivateApp.startWithParent = false;
        PrivateApp.collections = {};
        PrivateApp.on('start', function () {
            console.log('private app: started');
            require(['apps/private/apps/open_menus/app']);
        });
        PrivateApp.on('stop', function () {
            console.log('private app: stopped');
        });
    });
    return App.PrivateApp;
});
