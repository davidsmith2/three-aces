define([
    'app'
], function (App) {
    App.module('PrivateApp.OpenMenuApp', function (OpenMenuApp) {
        OpenMenuApp.startWithParent = false;
        OpenMenuApp.on('start', function (openMenu) {
            console.log('open menu app: started');
            require([
                'apps/private/apps/open_menu/router'
            ],
            function (router) {
                router.controller.show(openMenu);
            });
        });
        OpenMenuApp.on('stop', function () {
            console.log('open menu app: stopped');
        });
    });
    return App.PrivateApp.OpenMenuApp;
});
