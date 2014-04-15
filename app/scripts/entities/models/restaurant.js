define([
    'backbone',
    'underscore',
    'backbone-relational',
    'backbone-forms'
], function (Backbone, _) {
    'use strict';

    var SubmitButtonTmpl = _.template('<input class="btn btn-primary" type="submit" value="Done" />');

    var Restaurant = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        url: function () {
            return '/openmenus/' + this.get('openMenu').get('_id') + '/restaurant';
        },
        defaults: {
            address1: '',
            cityTown: '',
            country: '',
            fax: '',
            phone: '',
            postalCode: '',
            restaurantName: '',
            stateProvince: ''
        },
        schema: {
            restaurantName: {
                type: 'Text',
                title: 'Name'
            },
            address1: {
                type: 'Text',
                title: 'Address 1'
            },
            cityTown: {
                type: 'Text',
                title: 'City/Town'
            },
            stateProvince: {
                type: 'Select',
                options: ['', 'MA', 'VA'],
                title: 'State/Province'
            },
            postalCode: {
                type: 'Text',
                title: 'Postal Code'
            },
            country: {
                type: 'Select',
                options: ['', 'United States']
            },
            phone: 'Text',
            fax: 'Text',
            submitButton: {
                template: SubmitButtonTmpl
            }
        }
    });
    return Restaurant;
});