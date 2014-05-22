define([
    'app',
    'apps/private/apps/menu_groups/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.MenuGroupsApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (options) {
            var menuGroup = options.model;
            var menuGroupsRegion = options.region;
            var menuGroupView = new View.Form({
                model: menuGroup
            });
            menuGroupsRegion.show(menuGroupView);
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };

    });

    return App.PrivateApp.MenuGroupsApp.Common.Controllers.NewEdit;

});