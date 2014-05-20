define([
    'app',
    'apps/private/apps/open_menus/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {
    App.module('PrivateApp.OpenMenusApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: NewEdit.Controller.create
        };

    });

    return App.PrivateApp.OpenMenusApp.New.Controller;

});