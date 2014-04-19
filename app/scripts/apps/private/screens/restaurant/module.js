define([
    'apps/private/screens/restaurant/router',
    'helpers/vent'
], function (router, vent) {
    var Restaurant = function () {};
    Restaurant.prototype.wake = function () {
        vent.on('module2:start', function (options) {
            console.log('module2:start');
            router.controller.model = options.model;
            router.navigate(options.route, {trigger: true});
        });
    };
    return new Restaurant();
});