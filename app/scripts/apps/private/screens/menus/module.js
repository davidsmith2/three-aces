define([
    'helpers/vent'
], function (vent) {
    var Menus = function () {};
    Menus.prototype.wake = function () {
        require([
            'apps/private/screens/menus/router',
        ], function (router) {
            vent.on('module4:start', function (options) {
                console.log('module4:start');
                router.controller.collection = options.collection;
                router.navigate(options.route, {trigger: true});
            });
        });
    };
    return new Menus();
});