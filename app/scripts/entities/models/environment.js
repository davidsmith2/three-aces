define([
    'backbone',
    'backbone-relational',
    'backbone-forms'
], function (Backbone) {
    'use strict';
    var Environment = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        url: function () {
            return '/openmenus/' + this.get('openMenu').get('_id') + '/environment';
        },
        defaults: {
            takeoutAvailable: false
        },
        schema: {
            takeoutAvailable: {type: 'Checkbox', title: 'Takeout available?'}
        }
    });
    return Environment;
});