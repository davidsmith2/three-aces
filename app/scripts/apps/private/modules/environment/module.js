define([
    'helpers/vent'
], function (vent) {
    var Environment = function () {};
    Environment.prototype.wake = function () {
        vent.on('module3:start', function (options) {
            console.log('module3:start');
            require([
                'apps/private/modules/environment/router',
            ], function (router) {
                router.controller.model = options.model;
                router.navigate(options.route, {trigger: true});
            });
        });
    };
    return new Environment();
});