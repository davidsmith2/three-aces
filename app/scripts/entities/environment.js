define([
    'app',
    'backbone-relational',
    'backbone-forms'
], function (App) {

    App.module('Entities.Environment', function (Environment, App, Backbone, Marionette, $, _) {

        Environment.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            url: function () {
                return '/openmenus/' + this.get('openMenu').get('_id') + '/environment';
            },
            defaults: {
                takeoutAvailable: false
            },
            schema: {
                takeoutAvailable: {
                    type: 'Checkbox',
                    title: 'Takeout available?'
                }
            }
        });

    });

    return App.Entities.Environment;

});