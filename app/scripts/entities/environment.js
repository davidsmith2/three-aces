define([
    'backbone',
    'backbone-relational'
], function (Backbone) {
    'use strict';
    var EnvironmentModel = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        defaults: {
            takeoutAvailable: false,
            openMenu: ''
        },
        schema: {
            takeoutAvailable: {type: 'Checkbox', title: 'Takeout available?'}
        }
    });
    return EnvironmentModel;
});