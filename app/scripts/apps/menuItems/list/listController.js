define([
    'regionShower',
    'apps/menuItems/list/views/menuItems'
], function (RegionShower, MenuItems) {
    'use strict';
    var ListController = {
        listMenuItems: function (menuItems, menuItemSizes) {
            var regionShower = new RegionShower();
            var region = 'mainRegion';
            var view = new MenuItems({
                collection: menuItems
            });
            regionShower.show(region, view);
        }
    };
    return ListController;
});