define([
    'app',
    'backbone-relational',
    'backbone-forms'
], function (App) {

    App.module('Entities.Environment', function (Environment, App, Backbone) {

        Environment.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
	        url: function () {
	            return '/openmenus/' + this.get('open_menu').get('_id') + '/environment';
	        },
            defaults: {
                takeout_available: false
            },
            schema: {
                takeout_available: {
                    type: 'Checkbox',
                    title: 'Takeout available?'
                }
            }
        });

    });

    return App.Entities.Environment;

});
