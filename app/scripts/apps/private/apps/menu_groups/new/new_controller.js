define([
    'app',
    'apps/private/apps/menu_groups/common/controllers/new_edit/new_edit_controller'
], function (App, NewEdit) {
    App.module('PrivateApp.MenuGroupsApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            create: function (options) {
                var fetchingMenuGroup = App.request('menuGroup:entity:new', options.menuGroups);
                $.when(fetchingMenuGroup).done(function (unsavedMenuGroup) {
                    options.collection.create(unsavedMenuGroup, {
                        success: function (savedMenuGroup) {
                            NewEdit.Controller.createOrUpdate({
								model: savedMenuGroup,
								region: options.region
                            });
                        }
                    });
                });
            }
        };

    });

    return App.PrivateApp.MenuGroupsApp.New.Controller;

});