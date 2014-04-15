define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/private/screens/openMenus/item'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuTmpl) {
    'use strict';
	var OpenMenuItemView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click a[href=#edit]': 'editOpenMenu',
            'click a[href=#delete]': 'deleteOpenMenu'
        },
        editOpenMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:edit', this.model);
        },
        deleteOpenMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:delete', this.model);
        }
    });
    return OpenMenuItemView;
});