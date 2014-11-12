define([
    'app'
], function (App) {
    App.module('PrivateApp.MenusApp', function (MenusApp) {
        MenusApp.startWithParent = false;
        MenusApp.on('start', function (openMenuId) {
            console.log('menus app: started');
            require([
                'apps/private/apps/menus/router'
            ],
            function () {
                MenusApp.trigger('menu:index', openMenuId);
            });
        });
        MenusApp.on('stop', function () {
            console.log('menus app: stopped');
        });
    });
    return App.PrivateApp.MenusApp;
});
