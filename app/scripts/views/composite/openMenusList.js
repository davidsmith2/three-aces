define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'entities/openMenu',
    'hbs!tmpl/composite/openMenusList',
    'views/item/openMenuItem'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuModel, OpenMenuListTmpl, OpenMenuItemView) {
    'use strict';
    var OpenMenusListView = Backbone.Marionette.CompositeView.extend({
        itemView: OpenMenuItemView,
        template: OpenMenuListTmpl,
        ui: {},
        itemViewContainer: "tbody",
        events: {
            'click a[href=#addOpenMenu]': 'addOpenMenu'
        },
        addOpenMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:add', new OpenMenuModel());
        }
    });
    return OpenMenusListView;
});