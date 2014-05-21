define([
    'app',
    'apps/private/apps/menus/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {
    App.module('PrivateApp.MenusApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: function (options) {
                var fetchingMenu = App.request('menu:entity:new', options.menus);
                $.when(fetchingMenu).done(function (unsavedMenu) {
                    options.collection.create(unsavedMenu, {
                        success: function (savedMenu) {
                            NewEdit.Controller.createOrUpdate({
								model: savedMenu,
								region: options.region
                            });
                        }
                    });
                });
            }
        };

    });

    return App.PrivateApp.MenusApp.New.Controller;

});