define([
    'apps/form/formController'
], function (formController) {
    'use strict';
    var formModule;
    return {
        start: function (App, modalId) {
            formModule = App.module('MenuItemsApp.Form');
            formModule.addInitializer(function () {
                formController.showView(App.vent, App.collections, modalId);
            });
        }
    };
});