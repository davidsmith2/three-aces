define([
	'backbone',
	'views/item/restaurant',
	'hbs!tmpl/composite/restaurantsView_tmpl',
    'apps/private/threeaces.privateapp.vent'
],
function( Backbone, RestaurantView, RestaurantsViewTmpl, privateAppVent ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a restaurantView CompositeView");
		},
		
    	itemView: RestaurantView,
    	
    	template: RestaurantsViewTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "tbody",

		/* Ui events hash */
		events: {
            'click .btn': 'addRestaurant'
        },

		/* on render callback */
		onRender: function() {},

        addRestaurant: function (e) {
            var modalId = $(e.target).attr('href');
            e.preventDefault();
            privateAppVent.trigger('restaurant:add', modalId);
        }
	});

});
