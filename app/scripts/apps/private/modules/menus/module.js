define([
    'helpers/vent'
], function (vent) {
    var Menus = function () {};
    Menus.prototype.wake = function () {
        vent.on('module4:start', function (options) {
            console.log('module4:start');
            require([
                'apps/private/modules/menus/router',
            ], function (router) {
                router.controller.collection = options.collection;
                router.navigate(options.route, {trigger: true});
            });
        });
    };
    return new Menus();
});