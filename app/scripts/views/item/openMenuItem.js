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
            'click a[href=#edit]': 'editOpenMenu',
            'click a[href=#delete]': 'deleteOpenMenu'
        },
        editOpenMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:edit', {
                model: this.model
            });
        },
        deleteOpenMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:delete', {
                model: this.model
            });
        }
    });
    return OpenMenuItemView;
});