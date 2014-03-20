define([
    'app'
], function (App) {
    'use strict';
    var ModuleFactory = function () {};
    ModuleFactory.prototype.createModule = function (options) {
        return App.module(options.name);
    };
    return new ModuleFactory();
});