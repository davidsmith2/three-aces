define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
	'hbs!tmpl/private/modules/menuItems/item'
], function (Backbone, Marionette, $, _, vent, MenuGroupTmpl) {
    'use strict';
	var MenuItemView = Backbone.Marionette.ItemView.extend({
        template: MenuGroupTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click [href=#edit]': 'edit',
            'click [href=#delete]': 'delete'
        },
        edit: function (e) {
            e.preventDefault();
            vent.trigger('ui:menuItem:edit', this.model.get('_id'));
        },
        delete: function (e) {
            e.preventDefault();
            vent.trigger('ui:menuItem:delete', this.model.get('_id'));
        }
    });
    return MenuItemView;
});