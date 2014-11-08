define([
    'app',
    'apps/private/apps/open_menus/router'
], function (App) {
    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp) {
        OpenMenusApp.startWithParent = false;
        OpenMenusApp.on('start', function () {
            console.log('the open menus app is starting');
        });
        OpenMenusApp.on('stop', function () {
            console.log('the open menus app is stopping');
        });
    });
    return App.PrivateApp.OpenMenusApp;
});
