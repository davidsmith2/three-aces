define([
    'moduleFactory',
    'apps/menuItems/form/formController'
], function (ModuleFactory, FormController) {
    'use strict';
    var FormModule = ModuleFactory.createModule({
        name: 'MenuItemsApp.Form'
    });
    FormModule.API = {
        start: function () {
            return FormController.displayForm();
        }
    };
    return FormModule;
});