define([
    'app',
    'apps/private/apps/menu_items/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {

    App.module('PrivateApp.MenuItemsApp.Edit', function (Edit, App, Backbone, Marionette, $, _) {

        Edit.Controller = {
            update: NewEdit.Controller.createOrUpdate
        };

    });

    return App.PrivateApp.MenuItemsApp.Edit.Controller;

});