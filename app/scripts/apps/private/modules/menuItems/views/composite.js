define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuItems/views/item',
    'vents/ui',
    'hbs!tmpl/modules/private/menuItems/composite'
], function (Backbone, Marionette, $, _, MenuItemView, uiVent, Template) {
    'use strict';
    var MenuItemsView = Marionette.CompositeView.extend({
        itemView: MenuItemView,
        itemViewContainer: 'tbody',
        template: Template,
        events: {
            'click [href=#add]': 'add'
        },
        add: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:menuItem:add');
        }
    });
    return MenuItemsView;
});