define([
    'app',
    'apps/private/apps/open_menus/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {

    App.module('PrivateApp.OpenMenusApp.Edit', function (Edit, App, Backbone, Marionette, $, _) {

        Edit.Controller = {
            update: function (options) {
				NewEdit.Controller.createOrUpdate(options.model);
            }
        };

    });

    return App.PrivateApp.OpenMenusApp.Edit.Controller;

});