define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'entities/openMenu',
    'hbs!tmpl/composite/openMenus',
    'views/item/openMenu'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuModel, OpenMenuTmpl, OpenMenuView) {
    'use strict';
    return Backbone.Marionette.CompositeView.extend({
        itemView: OpenMenuView,
        template: OpenMenuTmpl,
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
});
