define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
	'hbs!tmpl/private/screens/menus/item'
], function (Backbone, Marionette, $, _, vent, MenuTmpl) {
    'use strict';
	var MenuView = Backbone.Marionette.ItemView.extend({
        template: MenuTmpl,
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
            console.log('ui:menu:edit')
            e.preventDefault();
            vent.trigger('ui:menu:edit', this.model.get('_id'));
        },
        delete: function (e) {
            console.log('ui:menu:delete')
            e.preventDefault();
            vent.trigger('ui:menu:delete', this.model.get('_id'));
        }
    });
    return MenuView;
});