define([
    'app',
    'backbone-relational',
    'backbone-forms'
], function (App) {

    App.module('Entities.Restaurant', function (Restaurant, App, Backbone, Marionette, $, _) {

        Restaurant.Model = Backbone.RelationalModel.extend({
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
                fax: 'Text'
            }
        });
    });

    return App.Entities.Restaurant;

});