define([
    'apps/category/categoryController'
], function (categoryController) {
    'use strict';
    var categoryModule;
    return {
        start: function (App) {
            categoryModule = App.module('MenuItemsApp.Form');
            categoryModule.addInitializer(function () {
                categoryController.showView(App.vent, App.collections.menuItems);
            });
        }
    };
});