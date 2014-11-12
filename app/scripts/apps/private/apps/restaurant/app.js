define([
    'app'
], function (App) {
    App.module('PrivateApp.RestaurantApp', function (RestaurantApp) {
        RestaurantApp.startWithParent = false;
        RestaurantApp.on('start', function (openMenuId) {
            console.log('restaurant app: started');
            require([
                'apps/private/apps/restaurant/router'
            ],
            function () {
                RestaurantApp.trigger('restaurant:show', openMenuId);
            });
        });
        RestaurantApp.on('stop', function () {
            console.log('restaurant app: stopped');
        });
    });
    return App.PrivateApp.RestaurantApp;
});
