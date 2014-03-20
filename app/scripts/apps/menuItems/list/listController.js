define([
    'regionShower',
    'apps/menuItems/list/views/menuItems'
], function (RegionShower, MenuItems) {
    'use strict';
    var ListController = {
        listMenuItems: function () {
            var regionShower = new RegionShower();
            var region = 'mainRegion';
            var view = new MenuItems({
                collection: {}
            });
            regionShower(region, view);
        }
    };
    return ListController;
});