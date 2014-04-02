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
            omfUuid: '',
            restaurantName: '',
            address1: '',
            cityTown: '',
            stateProvince: '',
            postalCode: '',
            country: '',
            phone: '',
            fax: ''
        },
        schema: {
            restaurantName: {type: 'Text', title: 'Name'},
            address1: {type: 'Text', title: 'Address 1'},
            cityTown: {type: 'Text', title: 'City/Town'},
            stateProvince: {type: 'Select', options: ['MA'], title: 'State/Province'},
            postalCode: {type: 'Text', title: 'Postal Code'},
            country: {type: 'Select', options: ['United States']},
            phone: 'Text',
            fax: 'Text'
        }
    });
});