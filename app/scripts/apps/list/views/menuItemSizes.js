define([
    'backbone.marionette',
    'apps/list/views/menuItemSize'
], function (Marionette, MenuItemSize) {
    'use strict';
    var MenuItemSizesView = Marionette.CollectionView.extend({
        itemView: MenuItemSize
    });
    return MenuItemSizesView;
});