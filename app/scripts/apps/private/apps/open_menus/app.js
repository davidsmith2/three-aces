define([
    'app'
], function (App) {
    App.module('PrivateApp.OpenMenusApp', function (OpenMenusApp) {
        OpenMenusApp.on('start', function () {
            console.log('open menus app: started');
            require([
                'apps/private/apps/open_menus/router'
            ], function () {
                OpenMenusApp.trigger('openMenus:index');
            });
        });
        OpenMenusApp.on('stop', function () {
            console.log('open menus app: stopped');
        });
    });
    return App.PrivateApp.OpenMenusApp;
});
