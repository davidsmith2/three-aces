define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/item/openMenu'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuTmpl) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
        template: OpenMenuTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click a[href=#detail]': 'showDetail'
        },
        showDetail: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:showDetail', this.model);
        }
    });
});