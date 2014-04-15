define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/screens/menus/item'
], function (Backbone, Marionette, $, _, privateAppVent, MenuTmpl) {
    'use strict';
	var MenuItemView = Backbone.Marionette.ItemView.extend({
        template: MenuTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click a[href=#edit]': 'editMenu',
            'click a[href=#delete]': 'deleteMenu'
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        editMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('menu:edit', this.model);
        },
        deleteMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('menu:delete', this.model);
        }
    });
    return MenuItemView;
});