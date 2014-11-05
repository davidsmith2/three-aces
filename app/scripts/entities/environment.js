define([
    'app',
    'backbone-relational',
    'backbone-forms'
], function (App) {

    App.module('Entities.Environment', function (Environment, App, Backbone, Marionette, $, _) {

        Environment.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
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

	    Environment.Collection = Backbone.Collection.extend({
	        model: Environment.Model,
	        url: function () {
				var openMenu = this.open_menu;
	            return '/openmenus/' + openMenu.get('_id') + '/environments';
	        }
	    });

    });

    return App.Entities.Environment;

});
