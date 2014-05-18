define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuGroups/views/item',
    'vents/ui',
    'hbs!tmpl/modules/private/menuGroups/composite'
], function (Backbone, Marionette, $, _, MenuGroupView, uiVent, Template) {
    'use strict';
    var MenuGroupsView = Backbone.Marionette.CompositeView.extend({
        itemView: MenuGroupView,
        itemViewContainer: 'tbody',
        template: Template,
        ui: {},
        events: {
            'click [href=#add]': 'add'
        },
        add: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:menuGroup:add');
        }
    });
    return MenuGroupsView;
});
