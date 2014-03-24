define([
    'underscore',
    'backbone',
    'apps/category/categoryController'
], function (_, Backbone, categoryController) {
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