define([
    'app',
    'apps/private/apps/menus/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {
    App.module('PrivateApp.MenusApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: function (menus) {
                var fetchingMenu = App.request('menu:entity:new');
                $.when(fetchingMenu).done(function (unsavedMenu) {
                    menus.create(unsavedMenu, {
                        success: function (savedMenu) {
                            NewEdit.Controller.createOrUpdate(savedMenu);
                        }
                    });
                });
            }
        };

    });

    return App.PrivateApp.MenusApp.New.Controller;

});