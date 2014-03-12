define([
    'jquery',
    'underscore',
    'backbone',
    'views/menu-item-size'
], function ($, _, Backbone, MenuItemSizeView) {
    'use strict';

    var MenuItemSizesView = Backbone.Marionette.CollectionView.extend({
        itemView: MenuItemSizeView
    });

    return MenuItemSizesView;

});