define([
    'app',
    'apps/private/apps/open_menus/dialog/dialog_controller'
], function (App, Dialog) {

    App.module('PrivateApp.OpenMenusApp.Edit', function (Edit, App, Backbone, Marionette, $, _) {

        Edit.Controller = {
            update: function (openMenu) {
				Dialog.Controller.show(openMenu);
            }
        };

    });

    return App.PrivateApp.OpenMenusApp.Edit.Controller;

});
