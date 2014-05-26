define([
    'app',
    'apps/private/apps/menu_items/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {
    App.module('PrivateApp.MenuItemsApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: function (menuItems) {
                var fetchingMenuItem = App.request('menuItem:entity:new');
                $.when(fetchingMenuItem).done(function (unsavedMenuItem) {
                    menuItems.create(unsavedMenuItem, {
                        success: function (savedMenuItem) {
                            NewEdit.Controller.createOrUpdate(savedMenuItem);
                        }
                    });
                });
            }
        };

    });

    return App.PrivateApp.MenuItemsApp.New.Controller;

});