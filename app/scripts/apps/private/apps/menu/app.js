define([
    'app'
], function (App) {
    App.module('PrivateApp.MenuApp', function (MenuApp) {
        MenuApp.startWithParent = false;
        MenuApp.on('start', function (menu) {
            console.log('menu app: started');
            require([
                'apps/private/apps/menu/router'
            ],
            function () {
                MenuApp.trigger('menu:show', menu);
            });
        });
        MenuApp.on('stop', function () {
            console.log('menu app: stopped');
        });
    });
    return App.PrivateApp.MenuApp;
});
