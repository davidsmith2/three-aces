define([
    'application',
    'apps/menu-items/form/form-view'
], function (App, Form) {
    'use strict';

    Form = App.module('MenuItemsApp.Form') || Form;

    Form.Controller = {
        displayForm: function () {
            var addMenuItemView = new App.MenuItemsApp.Form.AddMenuItem({
                model: new App.Entities.MenuItem(),
                collection: App.collections.menuItems
            });
            App.offScreenRegion.show(addMenuItemView);
        }
    };

    return Form;

});