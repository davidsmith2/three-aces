define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/item/environmentInfo'
], function (Backbone, Marionette, $, _, privateAppVent, EnvironmentInfoTmpl) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
        template: EnvironmentInfoTmpl,
        ui: {},
        events: {
            'click .btn': 'editEnvironmentInfo'
        },
        editEnvironmentInfo: function (e) {
            e.preventDefault();
            privateAppVent.trigger('environment:edit', {
                model: this.model,
                dialogId: $(e.target).attr('href')
            });
        }
    });
});
