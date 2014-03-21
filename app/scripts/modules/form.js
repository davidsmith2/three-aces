define([
    'apps/menuItems/form/formController'
], function (formController) {
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