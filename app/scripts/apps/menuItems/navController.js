define([
    'regionShower',
    'apps/menuItems/navView'
], function (RegionShower, NavView) {
    'use strict';
    var NavController = {
        displayNav: function () {
            var regionShower = new RegionShower();
            var region = 'navRegion';
            var view = new NavView();
            regionShower.show(region, view);
        }
    };
    return NavController;
});