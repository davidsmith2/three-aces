define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/screens/openMenus/views/item',
    'helpers/vent',
    'hbs!tmpl/private/screens/openMenus/composite'
], function (Backbone, Marionette, $, _, OpenMenuView, vent, OpenMenusTmpl) {
    'use strict';
    var OpenMenusView = Backbone.Marionette.CompositeView.extend({
        itemView: OpenMenuView,
        itemViewContainer: 'tbody',
        template: OpenMenusTmpl,
        ui: {},
        events: {
            'click [href=#add]': 'add'
        },
        add: function (e) {
            console.log('ui:openMenu:add')
            e.preventDefault();
            vent.trigger('ui:openMenu:add');
        }
    });
    return OpenMenusView;
});
