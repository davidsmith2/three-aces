define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
	'hbs!tmpl/private/screens/openMenus/item'
], function (Backbone, Marionette, $, _, vent, OpenMenuTmpl) {
    'use strict';
	var OpenMenuView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click [href=#edit]': 'edit',
            'click [href=#delete]': 'delete'
        },
        edit: function (e) {
            console.log('ui:openMenu:edit')
            e.preventDefault();
            vent.trigger('ui:openMenu:edit', this.model.get('_id'));
        },
        delete: function (e) {
            console.log('ui:openMenu:delete')
            e.preventDefault();
            vent.trigger('ui:openMenu:delete', this.model.get('_id'));
        }
    });
    return OpenMenuView;
});