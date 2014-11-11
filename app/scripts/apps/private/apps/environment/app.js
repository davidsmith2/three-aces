define([
    'app'
], function (App) {
    App.module('PrivateApp.EnvironmentApp', function (EnvironmentApp) {
        EnvironmentApp.startWithParent = false;
        EnvironmentApp.on('start', function (environment) {
            console.log('environment app: started');
            require([
                'apps/private/apps/environment/router'
            ],
            function () {
                EnvironmentApp.trigger('environment:show', environment);
            });
        });
        EnvironmentApp.on('stop', function () {
            console.log('environment app: stopped');
        });
    });
    return App.PrivateApp.EnvironmentApp;
});
