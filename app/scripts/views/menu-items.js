define([
    'jquery',
    'underscore',
    'backbone',
    'views/menu-item',
    'hbs!tmpl/menu-items'
], function ($, _, Backbone, MenuItemView, template) {
    'use strict';

    var MenuItemsView = Backbone.Marionette.CompositeView.extend({
        itemView: MenuItemView,
        itemViewContainer: 'tbody',
        template: template
    });

    return MenuItemsView;

});