define([
    'jquery',
    'underscore',
    'backbone',
    'views/menu-item'
], function ($, _, Backbone, MenuItemView) {
    'use strict';

    var MenuItemsView = Backbone.Marionette.CollectionView.extend({
        itemView: MenuItemView,
        tagName: 'ul'
    });

    return MenuItemsView;

});