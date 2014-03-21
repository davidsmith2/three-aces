define([
    'moduleFactory',
    'apps/menuItems/form/formController'
], function (ModuleFactory, formController) {
    'use strict';
    var formModule;
    return {
        start: function (App, menuItems, modalId) {
            formModule = App.module('MenuItemsApp.Form');
            formModule.addInitializer(function () {
                formController.showView(App.vent, menuItems, modalId);
            });
        }
    };
});