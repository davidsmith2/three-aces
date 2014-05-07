define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
	'hbs!tmpl/modules/private/menuGroups/item'
], function (Backbone, Marionette, $, _, vent, MenuGroupTmpl) {
    'use strict';
	var MenuGroupView = Backbone.Marionette.ItemView.extend({
        template: MenuGroupTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click [href=#edit]': 'edit',
            'click [href=#delete]': 'delete'
        },
        edit: function (e) {
            e.preventDefault();
            vent.trigger('ui:menuGroup:edit', this.model.get('_id'));
        },
        delete: function (e) {
            e.preventDefault();
            vent.trigger('ui:menuGroup:delete', this.model.get('_id'));
        }
    });
    return MenuGroupView;
});