define([
    'views/generic/form'
], function (FormView) {
    'use strict';
	var AddMenuView = FormView.extend({
        events: {
            'submit': 'submit'
        },
        submit: function (e) {
            e.preventDefault();
            this.trigger('menu:submit');
        }
    });
    return AddMenuView;
});
