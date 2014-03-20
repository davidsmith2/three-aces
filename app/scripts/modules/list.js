define([
    'moduleFactory',
    'apps/menuItems/list/listController'
], function (ModuleFactory, ListController) {
    'use strict';
    var ListModule = ModuleFactory.createModule({
        name: 'MenuItemsApp.List'
    });
    ListModule.API = {
        start: function () {
            ListController.listMenuItems();
        }
    };
    return ListModule;
});