define([
    'backbone',
    'backbone-relational'
], function (Backbone) {
    'use strict';
    var EnvironmentInfoModel = Backbone.RelationalModel.extend({
        urlRoot: '/api/omfs/:id/environment-info',
        idAttribute: '_id',
        defaults: {
            takeoutAvailable: false
        }
    });
    return EnvironmentInfoModel;
});