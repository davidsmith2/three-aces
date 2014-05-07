define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuItems/views/item',
    'helpers/vent',
    'hbs!tmpl/modules/private/menuItems/composite'
], function (Backbone, Marionette, $, _, MenuItemView, vent, MenuItemsTmpl) {
    'use strict';
    var MenuItemsView = Marionette.CompositeView.extend({
        itemView: MenuItemView,
        itemViewContainer: 'tbody',
        template: MenuItemsTmpl,
        events: {
            'click [href=#add]': 'add'
        },
        add: function (e) {
            e.preventDefault();
            vent.trigger('ui:menuItem:add');
        }
    });
    return MenuItemsView;
});