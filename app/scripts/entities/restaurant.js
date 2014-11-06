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
                    title: 'Name'
                },
                address_1: {
                    type: 'Text',
                    title: 'Address'
                },
                city_town: {
                    type: 'Text',
                    title: 'City'
                },
                state_province: {
                    type: 'Select',
                    options: ['', 'MA', 'VA'],
                    title: 'State'
                },
                postal_code: {
                    type: 'Text',
                    title: 'ZIP'
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
