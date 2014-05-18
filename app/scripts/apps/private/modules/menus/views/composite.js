define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menus/views/item',
    'vents/ui',
    'hbs!tmpl/modules/private/menus/composite'
], function (Backbone, Marionette, $, _, MenuView, uiVent, Template) {
    'use strict';
    var MenusView = Marionette.CompositeView.extend({
        itemView: MenuView,
        itemViewContainer: 'tbody',
        template: Template,
        ui: {},
        events: {
            'click a[href=#add]': 'add'
        },
        add: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:add');
        }
    });
    return MenusView;
});