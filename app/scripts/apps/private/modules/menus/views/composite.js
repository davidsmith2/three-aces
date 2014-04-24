define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'hbs!tmpl/private/screens/menus/composite',
    'apps/private/modules/menus/views/item'
], function (Backbone, Marionette, $, _, vent, MenusTmpl, MenuView) {
    'use strict';
    var MenusView = Marionette.CompositeView.extend({
        itemView: MenuView,
        itemViewContainer: 'tbody',
        template: MenusTmpl,
        ui: {},
        events: {
            'click a[href=#add]': 'add'
        },
        add: function (e) {
            console.log('ui:menu:add')
            e.preventDefault();
            vent.trigger('ui:menu:add');
        }
    });
    return MenusView;
});