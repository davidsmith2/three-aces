define([
    'backbone',
    'backbone-relational',
    'backbone-forms'
], function (Backbone) {
    'use strict';
    return Backbone.RelationalModel.extend({
        urlRoot: '/api/restaurants',
        idAttribute: '_id',
        defaults: {
            restaurantName: '',
            address1: '',
            cityTown: '',
            stateProvince: '',
            postalCode: '',
            country: '',
            phone: '',
            fax: '',
            openMenu: ''
        },
        schema: {
            restaurantName: {type: 'Text', title: 'Name'},
            address1: {type: 'Text', title: 'Address 1'},
            cityTown: {type: 'Text', title: 'City/Town'},
            stateProvince: {type: 'Select', options: ['', 'MA', 'VA'], title: 'State/Province'},
            postalCode: {type: 'Text', title: 'Postal Code'},
            country: {type: 'Select', options: ['', 'United States']},
            phone: 'Text',
            fax: 'Text'
        }
    });
});