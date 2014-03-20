define([
    'regionShower',
    'apps/menuItems/form/views/addMenuItem',
    'entities/menuItem'
], function (RegionShower, AddMenuItem, MenuItem) {
    'use strict';
    var FormController = {
        displayForm: function () {
            var regionShower = new RegionShower();
            var region = 'offscreenRegion';
            var view = new AddMenuItem({
                model: new MenuItem(),
                collection: {}
            });
            regionShower.show(region, view);
        }
    };
    return FormController;
});