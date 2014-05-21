define([
    'app',
    'apps/private/apps/open_menus/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {
    App.module('PrivateApp.OpenMenusApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: function (openMenus) {
                var fetchingOpenMenu = App.request('openMenu:entity:new');
                $.when(fetchingOpenMenu).done(function (unsavedOpenMenu) {
                    openMenus.create(unsavedOpenMenu, {
                        success: function (savedOpenMenu) {
                            NewEdit.Controller.createOrUpdate(savedOpenMenu);
                        }
                    });
                });

            }
        };

    });

    return App.PrivateApp.OpenMenusApp.New.Controller;

});