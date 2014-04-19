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
            vent.trigger('next:module', this.model);
        },
        previous: function (e) {
            e.preventDefault();
            vent.trigger('previous:module', this.model);
        }
	});
    return ButtonsView;
});
