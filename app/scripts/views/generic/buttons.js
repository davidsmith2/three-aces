define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/buttons',
    'bootstrap'
], function (Backbone, Marionette, $, _, ButtonsTmpl) {
    'use strict';
	var ButtonsView = Backbone.Marionette.ItemView.extend({
        template: ButtonsTmpl,
        ui: {},
		events: {
            'click [href=#next]': 'next',
            'click [href=#previous]': 'previous'
        },
        next: function (e) {
            e.preventDefault();
            console.log('next')
        },
        previous: function (e) {
            e.preventDefault();
            console.log('previous')
        }
	});
    return ButtonsView;
});
