define([
    'app'
], function (App) {
    'use strict';
    var RegionShower = function () {};
    RegionShower.prototype.show = function (region, view) {
        return App[region].show(view);
    };
    return RegionShower;
});