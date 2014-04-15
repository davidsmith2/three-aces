define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/screens/openMenus/views/item',
    'apps/private/vent',
    'entities/models/openMenu',
    'hbs!tmpl/private/screens/openMenus/composite'
], function (Backbone, Marionette, $, _, OpenMenuView, vent, OpenMenu, OpenMenusTmpl) {
    'use strict';
    var OpenMenusView = Backbone.Marionette.CompositeView.extend({
        itemView: OpenMenuView,
        itemViewContainer: 'tbody',
        template: OpenMenusTmpl,
        ui: {},
        events: {
            'click a[href=#add]': 'addOpenMenu'
        },
        addOpenMenu: function (e) {
            e.preventDefault();
            vent.trigger('openMenu:add', new OpenMenu());
        }
    });
    return OpenMenusView;
});
