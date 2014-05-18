define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'vents/ui',
	'hbs!tmpl/modules/private/menus/item'
], function (Backbone, Marionette, $, _, uiVent, Template) {
    'use strict';
	var MenuView = Backbone.Marionette.ItemView.extend({
        template: Template,
        tagName: 'tr',
        ui: {},
        events: {
            'click a[href=#edit]': 'edit',
            'click a[href=#delete]': 'delete'
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        edit: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:edit', this.model.get('_id'));
        },
        delete: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:delete', this.model.get('_id'));
        }
    });
    return MenuView;
});