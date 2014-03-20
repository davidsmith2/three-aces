define([
    'moduleFactory',
    'apps/menuItems/nav/navController'
], function (ModuleFactory, NavController) {
    'use strict';
    var NavModule = ModuleFactory.createModule({
        name: 'MenuItemsApp.Nav'
    });
    NavModule.API = {
        start: function () {
            return NavController.displayNav();
        }
    };
    return NavModule;
});