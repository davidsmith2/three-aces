define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'entities/models/menu',
    'hbs!tmpl/composite/menusList',
    'views/item/menuItem'
], function (Backbone, Marionette, $, _, privateAppVent, Menu, MenusListTmpl, MenuItemView) {
    'use strict';
    var MenusListView = Marionette.CompositeView.extend({
        itemView: MenuItemView,
        itemViewContainer: 'tbody',
        template: MenusListTmpl,
        ui: {},
        events: {
            'click a[href=#add]': 'addMenu'
        },
        addMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('menu:add', {
                model: new Menu()
            });
        }
    });
    return MenusListView;
});