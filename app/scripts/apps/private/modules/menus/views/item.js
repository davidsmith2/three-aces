define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
	'hbs!tmpl/private/screens/menus/item'
], function (Backbone, Marionette, $, _, MenuTmpl) {
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
            this.trigger('menu:edit', this.model.get('_id'));
        },
        deleteMenu: function (e) {
            e.preventDefault();
            this.trigger('menu:delete', this.model.get('_id'));
        }
    });
    return MenuItemView;
});