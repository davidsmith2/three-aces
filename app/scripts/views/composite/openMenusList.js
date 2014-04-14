define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'entities/models/openMenu',
    'hbs!tmpl/composite/openMenusList',
    'views/item/openMenuItem'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenu, OpenMenuListTmpl, OpenMenuItemView) {
    'use strict';
    var OpenMenusListView = Backbone.Marionette.CompositeView.extend({
        itemView: OpenMenuItemView,
        itemViewContainer: 'tbody',
        template: OpenMenuListTmpl,
        ui: {},
        events: {
            'click a[href=#add]': 'addOpenMenu'
        },
        addOpenMenu: function (e) {
            e.preventDefault();
            privateAppVent.trigger('openMenu:add', new OpenMenu());
        }
    });
    return OpenMenusListView;
});
