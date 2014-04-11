define([
    'backbone',
    'backbone-relational',
    'backbone-forms'
], function (Backbone) {
    'use strict';
    var EnvironmentModel = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        url: function () {
            return '/api/open-menus/' + this.get('openMenu').get('_id') + '/environment';
        },
        defaults: {
            takeoutAvailable: false
        },
        schema: {
            takeoutAvailable: {type: 'Checkbox', title: 'Takeout available?'}
        }
    });
    return EnvironmentModel;
});