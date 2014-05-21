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
            layout.on('showMenuGroupsTabPane', function (options) {
                console.log('starting menu groups app')
/*
                require([
                    'apps/private/apps/menu_groups/menu_groups_app'
                ], function () {
                    App.PrivateApp.MenusApp.trigger('menuGroups:list', options);
                });
*/
            });
            layout.on('showMenuItemsTabPane', function (options) {
                console.log('starting menu items app')
/*
                require([
                    'apps/private/apps/menu_groups/menu_groups_app'
                ], function () {
                    App.PrivateApp.MenusApp.trigger('menuGroups:list', options);
                });
*/
            });
            menusRegion.show(layout);
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };

    });

    return App.PrivateApp.MenusApp.Common.Controllers.NewEdit;

});