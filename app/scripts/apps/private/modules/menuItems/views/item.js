define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'vents/ui',
	'hbs!tmpl/modules/private/menuItems/item'
], function (Backbone, Marionette, $, _, uiVent, Template) {
    'use strict';
	var MenuItemView = Backbone.Marionette.ItemView.extend({
        template: Template,
        tagName: 'tr',
        ui: {},
        events: {
            'click [href=#edit]': 'edit',
            'click [href=#delete]': 'delete'
        },
        edit: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:menuItem:edit', this.model.get('_id'));
        },
        delete: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:menuItem:delete', this.model.get('_id'));
        }
    });
    return MenuItemView;
});