define([
    'app',
    'apps/private/apps/menus/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.MenusApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (options) {
            var menu = options.model;
            var menusRegion = options.region;
            var layout = new View.Layout({
                model: menu
            });
            var menuInfoView = new View.Form({
                model: menu
            });
            layout.on('show', function () {
                this.menuInfoRegion.show(menuInfoView);
            });
            layout.on('showMenuGroups', showMenuGroups);
            menusRegion.show(layout);
        };

        var showMenuGroups = function (options) {
            require([
                'apps/private/apps/menu_groups/menu_groups_app'
            ], function () {
                App.PrivateApp.MenusApp.trigger('menuGroups:show', options);
            });
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };

    });

    return App.PrivateApp.MenusApp.Common.Controllers.NewEdit;

});