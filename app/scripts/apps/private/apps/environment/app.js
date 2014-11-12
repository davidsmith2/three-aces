define([
    'app'
], function (App) {
    App.module('PrivateApp.EnvironmentApp', function (EnvironmentApp) {
        EnvironmentApp.startWithParent = false;
        EnvironmentApp.on('start', function (openMenuId) {
            console.log('environment app: started');
            require([
                'apps/private/apps/environment/router'
            ],
            function () {
                EnvironmentApp.trigger('environment:show', openMenuId);
            });
        });
        EnvironmentApp.on('stop', function () {
            console.log('environment app: stopped');
        });
    });
    return App.PrivateApp.EnvironmentApp;
});
