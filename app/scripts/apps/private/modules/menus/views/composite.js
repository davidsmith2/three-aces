define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'entities/models/menu',
    'hbs!tmpl/private/screens/menus/composite',
    'apps/private/modules/menus/views/item'
], function (Backbone, Marionette, $, _, privateAppVent, Menu, MenusTmpl, MenuView) {
    'use strict';
    var MenusView = Marionette.CompositeView.extend({
        itemView: MenuView,
        itemViewContainer: 'tbody',
        template: MenusTmpl,
        ui: {},
        events: {
            'click a[href=#add]': 'addMenu'
        },
        addMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('menu:add', new Menu());
        }
    });
    return MenusView;
});