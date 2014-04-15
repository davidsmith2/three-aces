define([
    'views/generic/form'
], function (FormView) {
    'use strict';
	var EnvironmentView = FormView.extend({
        events: {
            'submit': 'submit'
        },
        submit: function (e) {
            e.preventDefault();
            this.trigger('environment:submit');
        }
    });
    return EnvironmentView;
});
