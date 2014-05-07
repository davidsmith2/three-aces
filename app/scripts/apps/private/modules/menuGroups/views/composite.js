define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuGroups/views/item',
    'helpers/vent',
    'hbs!tmpl/modules/private/menuGroups/composite'
], function (Backbone, Marionette, $, _, MenuGroupView, vent, MenuGroupsTmpl) {
    'use strict';
    var MenuGroupsView = Backbone.Marionette.CompositeView.extend({
        itemView: MenuGroupView,
        itemViewContainer: 'tbody',
        template: MenuGroupsTmpl,
        ui: {},
        events: {
            'click [href=#add]': 'add'
        },
        add: function (e) {
            e.preventDefault();
            vent.trigger('ui:menuGroup:add');
        }
    });
    return MenuGroupsView;
});
