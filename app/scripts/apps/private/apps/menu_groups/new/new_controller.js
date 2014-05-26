define([
    'app',
    'apps/private/apps/menu_groups/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {
    App.module('PrivateApp.MenuGroupsApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: function (menuGroups) {
                var fetchingMenuGroup = App.request('menuGroup:entity:new');
                $.when(fetchingMenuGroup).done(function (unsavedMenuGroup) {
                    menuGroups.create(unsavedMenuGroup, {
                        success: function (savedMenuGroup) {
                            NewEdit.Controller.createOrUpdate(savedMenuGroup);
                        }
                    });
                });
            }
        };

    });

    return App.PrivateApp.MenuGroupsApp.New.Controller;

});