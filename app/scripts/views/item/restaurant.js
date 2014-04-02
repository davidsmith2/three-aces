define([
	'backbone',
	'hbs!tmpl/item/restaurantView_tmpl'
],
function( Backbone, RestaurantViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log(this.model);
		},
		
    	template: RestaurantViewTmpl,

        tagName: 'tr',
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click .delete-restaurant': 'deleteRestaurant'
        },

		/* on render callback */
		onRender: function() {},
        deleteRestaurant: function (e) {
            e.preventDefault();
            this.model.destroy();
        }
	});

});
