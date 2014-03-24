define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItems',
    'apps/list/views/menuItem'
], function (Marionette, $, template, MenuItem) {
    'use strict';
    var MenuItemsView = Marionette.CompositeView.extend({
        itemView: MenuItem,
        itemViewContainer: 'tbody',
        template: template
    });
    return MenuItemsView;
});