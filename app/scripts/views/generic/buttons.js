define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/buttons',
    'helpers/vent'
], function (Backbone, Marionette, $, _, ButtonsTmpl, vent) {
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
            this.trigger('next', this.model);
        },
        previous: function (e) {
            e.preventDefault();
            this.trigger('previous', this.model);
        }
	});
    return ButtonsView;
});
