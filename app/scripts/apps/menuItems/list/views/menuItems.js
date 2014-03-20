define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItem',
    'apps/menuItems/list/views/menuItem'
], function (Marionette, $, template, MenuItem) {
    'use strict';
    var MenuItems = Marionette.CompositeView.extend({
        itemView: MenuItem,
        itemViewContainer: 'tbody',
        template: template
    });
    return MenuItems;
});