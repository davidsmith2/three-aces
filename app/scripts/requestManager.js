define([
    'app'
], function (App) {
    'use strict';
    var RequestManager = function () {
        this.get = function (name) {
            return App.reqres.request(name);
        };
        this.set = function (name, func) {
            App.reqres.setHandler(name, func);
        };
    };
    return RequestManager;
});