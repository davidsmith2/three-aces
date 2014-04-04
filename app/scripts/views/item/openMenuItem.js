define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/item/openMenuItem'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuItemTmpl) {
    'use strict';
	var OpenMenuItemView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuItemTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click a[href=#detail]': 'showOpenMenu'
        },
        showOpenMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:show', this.model);
        }
    });
    return OpenMenuItemView;
});