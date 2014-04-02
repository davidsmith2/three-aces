define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItems',
    'views/menuItem'
], function (Marionette, $, template, MenuItem) {
    'use strict';
    var MenuItemsView = Marionette.CompositeView.extend({
        itemView: MenuItem,
        itemViewContainer: 'tbody',
        template: template,
        events: {
            'click .btn': 'addMenuItem'
        },
        addMenuItem: function (e) {
            var modalId = $(e.target).attr('href');
            e.preventDefault();
            this.trigger('addMenuItem', modalId);
        }
    });
    return MenuItemsView;
});