define([
    'helpers/vent'
], function (vent) {
    var OpenMenus = function () {};
    OpenMenus.prototype.wake = function () {
        vent.on('module1:start', function (options) {
            console.log('module1:start');
            require([
                'apps/private/modules/openMenus/router'
            ], function (router) {
                router.controller.collection = options.collection;
                router.navigate(options.route, {trigger: true});
            });
        });
    };
    return new OpenMenus();
});