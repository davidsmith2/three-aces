define([
    'views/generic/form'
], function (FormView) {
    'use strict';
	var RestaurantView = FormView.extend({
        events: {
            'submit': 'submit'
        },
        submit: function (e) {
            e.preventDefault();
            this.trigger('restaurant:submit');
        }
    });
    return RestaurantView;
});
