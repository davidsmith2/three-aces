define([
    'app',
    'apps/private/apps/open_menus/dialog/dialog_controller'
], function (App, Dialog) {
    App.module('PrivateApp.OpenMenusApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: function (openMenus) {
                var fetchingOpenMenu = App.request('openMenu:entity:new');
                $.when(fetchingOpenMenu).done(function (unsavedOpenMenu) {
                    openMenus.create(unsavedOpenMenu, {
                        success: function (savedOpenMenu) {
                            Dialog.Controller.show(savedOpenMenu);
                        }
                    });
                });

            }
        };

    });

    return App.PrivateApp.OpenMenusApp.New.Controller;

});
