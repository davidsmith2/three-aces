define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'entities/models/openMenu',
    'hbs!tmpl/private/screens/openMenus/composite',
    'apps/private/screens/openMenus/views/item'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenu, OpenMenusTmpl, OpenMenuView) {
    'use strict';
    var OpenMenusListView = Backbone.Marionette.CompositeView.extend({
        itemView: OpenMenuView,
        itemViewContainer: 'tbody',
        template: OpenMenusTmpl,
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
