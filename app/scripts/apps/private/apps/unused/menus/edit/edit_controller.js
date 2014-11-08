define([
    'app',
    'apps/private/apps/menus/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {

    App.module('PrivateApp.MenusApp.Edit', function (Edit, App, Backbone, Marionette, $, _) {

        Edit.Controller = {
            update: NewEdit.Controller.createOrUpdate
        };

    });

    return App.PrivateApp.MenusApp.Edit.Controller;

});