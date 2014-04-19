define([
    'backbone',
    'backbone.wreqr'
], function (Backbone, Wreqr) {
    'use strict';
    var vent = new Wreqr.EventAggregator();
    return vent;
});