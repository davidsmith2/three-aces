define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'vents/ui',
	'hbs!tmpl/modules/private/openMenus/item'
], function (Backbone, Marionette, $, _, uiVent, Template) {
    'use strict';
	var OpenMenuView = Backbone.Marionette.ItemView.extend({
        template: Template,
        tagName: 'tr',
        ui: {},
        events: {
            'click [href=#edit]': 'edit',
            'click [href=#delete]': 'delete'
        },
        edit: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:openMenu:edit', this.model.get('_id'));
        },
        delete: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:openMenu:delete', this.model.get('_id'));
        }
    });
    return OpenMenuView;
});