define([
    'app',
    'apps/private/apps/open_menus/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.OpenMenusApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (openMenu) {
            var layout = new View.Layout({
                model: openMenu
            });
            var restaurantView = new View.Form({
                model: openMenu.get('restaurantInfo')
            });
            var environmentView = new View.Form({
                model: openMenu.get('environment')
            });
            layout.on('show', function () {
                this.restaurantRegion.show(restaurantView);
                this.environmentRegion.show(environmentView);
            });
            layout.on('showMenus', showMenus);
            App.mainRegion.show(layout);
        };

        var showMenus = function (options) {
            require([
                'apps/private/apps/menus/menus_app'
            ], function () {
                App.PrivateApp.OpenMenusApp.trigger('menus:show', options);
            });
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };
    });

    return App.PrivateApp.OpenMenusApp.Common.Controllers.NewEdit;

});