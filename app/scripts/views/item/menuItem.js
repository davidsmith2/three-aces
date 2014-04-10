define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/item/menuItem'
], function (Backbone, Marionette, $, _, privateAppVent, MenuItemTmpl) {
    'use strict';
	var MenuItemView = Backbone.Marionette.ItemView.extend({
        template: MenuItemTmpl,
        tagName: 'tr',
        ui: {},
        initialize: function () {
            console.log(this.model)
        },
        events: {
            'click a[href=#edit]': 'editMenu',
            'click a[href=#delete]': 'deleteMenu'
        },
        editMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('menu:edit', {
                model: this.model
            });
        },
        deleteMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('menu:delete', {
                model: this.model
            });
        }
    });
    return MenuItemView;
});