define([
    'apps/private/screens/environment/router',
    'helpers/vent'
], function (router, vent) {
    var Environment = function () {};
    Environment.prototype.wake = function () {
        vent.on('module3:start', function (options) {
            console.log('module3:start');
            router.controller.model = options.model;
            router.navigate(options.route, {trigger: true});
        });
    };
    return new Environment();
});