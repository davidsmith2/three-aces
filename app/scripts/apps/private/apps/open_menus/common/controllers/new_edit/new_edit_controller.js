define([
    'app',
    'apps/private/apps/open_menus/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.OpenMenusApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (openMenu) {

            var layoutView = new View.Layout();

            var breadcrumbsView = new View.Breadcrumbs();

            var tabsView = new View.Tabs({
                model: openMenu
            });

            var restaurantView = new View.Form({
                model: openMenu.get('restaurantInfo')
            });

            var environmentView = new View.Form({
                model: openMenu.get('environment')
            });

            layoutView.on('show', function () {
                this.topRegion.show(breadcrumbsView);
                this.bottomRegion.show(tabsView);
            });

            tabsView.on('show', function () {
                this.restaurantRegion.show(restaurantView);
                this.environmentRegion.show(environmentView);
            });

            tabsView.on('showMenus', showMenus);

            breadcrumbsView.on('showOpenMenus', showOpenMenus);

            App.mainRegion.show(layoutView);

        };

        var showMenus = function (options) {
            require([
                'apps/private/apps/menus/menus_app'
            ], function () {
                App.PrivateApp.OpenMenusApp.trigger('menus:show', options);
            });
        };

        var showOpenMenus = function () {
            App.PrivateApp.trigger('openMenus:show');
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };
    });

    return App.PrivateApp.OpenMenusApp.Common.Controllers.NewEdit;

});