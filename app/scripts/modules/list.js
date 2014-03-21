define([
    'moduleFactory',
    'apps/menuItems/list/listController'
], function (ModuleFactory, listController) {
    'use strict';
    var listModule;
    return {
        start: function (App, menuItems) {
            listModule = App.module('MenuItemsApp.List');
            listModule.addInitializer(function () {
                listController.showView(App.vent, menuItems);
            });
        }
    };
});