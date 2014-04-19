define([
    'backbone',
    'backbone-relational',
    'backbone-forms'
], function (Backbone) {
    'use strict';
    var Menu = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        defaults: {
            currencySymbol: '',
            menuName: '',
            menuGroups: []
        },
        schema: {
            menuName: {
                type: 'Text',
                title: 'Name'
            },
            currencySymbol: {
                type: 'Text',
                title: 'Currency Symbol'
            }
        }
    });
    return Menu;
});