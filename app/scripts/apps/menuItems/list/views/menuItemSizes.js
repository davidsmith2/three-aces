define([
    'backbone.marionette',
    'apps/menuItems/list/views/menuItemSize'
], function (Marionette, MenuItemSize) {
    'use strict';
    var MenuItemSizes = Marionette.CollectionView.extend({
        itemView: MenuItemSize
    });
    return MenuItemSizes;
});