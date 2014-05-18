define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/openMenus/views/item',
    'vents/ui',
    'hbs!tmpl/modules/private/openMenus/composite',
], function (Backbone, Marionette, $, _, ItemView, uiVent, Template) {
    'use strict';
    var OpenMenusView = Backbone.Marionette.CompositeView.extend({
        itemView: ItemView,
        itemViewContainer: 'tbody',
        template: Template,
        ui: {},
        events: {
            'click [href=#add]': 'add'
        },
        add: function (e) {
            e.preventDefault();
            uiVent.trigger('ui:openMenu:add');
        }
    });
    return OpenMenusView;
});
