define([
    'app',
    'backbone-relational',
    'backbone-forms'
], function (App) {

    App.module('Entities.Restaurant', function (Restaurant, App, Backbone) {

        Restaurant.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            url: function () {
                return '/openmenus/' + this.get('open_menu').get('_id') + '/restaurant';
            },
            defaults: {
                restaurant_name: '',
                address_1: '',
                city_town: '',
                state_province: '',
                postal_code: '',
                country: '',
                fax: '',
                phone: ''
            },
            schema: {
                restaurant_name: {
                    type: 'Text',
                    title: 'Restaurant name'
                },
                address_1: {
                    type: 'Text',
                    title: 'Address 1'
                },
                city_town: {
                    type: 'Text',
                    title: 'City/town'
                },
                state_province: {
                    type: 'Select',
                    options: ['', 'MA', 'VA'],
                    title: 'State/province'
                },
                postal_code: {
                    type: 'Text',
                    title: 'Postal code'
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
