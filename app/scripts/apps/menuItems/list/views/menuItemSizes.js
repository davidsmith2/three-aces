define([
    'backbone.marionette',
    'apps/menuItems/list/views/menuItemSize'
], function (Marionette, MenuItemSize) {
    'use strict';
    var MenuItemSizesView = Marionette.CollectionView.extend({
        itemView: MenuItemSize
    });
    return MenuItemSizesView;
});