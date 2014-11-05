define([
    'app',
    'apps/private/apps/open_menus/dialog/views/breadcrumbs',
    'apps/private/apps/open_menus/dialog/views/tabs',
    'apps/private/common/views/buttons',
    'apps/private/common/views/dialog',
    'apps/private/common/views/form'
], function (App, BreadcrumbsView, TabsView, ButtonsView, DialogView, FormView) {

    App.module('PrivateApp.OpenMenusApp.Common.Controllers.Dialog', function (Dialog, App, Backbone, Marionette, $, _) {

        var show = function (openMenu) {

            var dialogView = new DialogView();

            var tabsView = new TabsView({
                model: openMenu
            });

            var restaurantView = new FormView({
                model: openMenu.get('restaurant_info')
            });

            var environmentView = new FormView({
                model: openMenu.get('environment')
            });

            var buttonsView = new ButtonsView({
                model: openMenu
            });

            tabsView.on('show', function () {
                this.restaurantRegion.show(restaurantView);
                this.environmentRegion.show(environmentView);
            });

            dialogView.on('show', function () {
                this.bodyRegion.show(tabsView);
                this.footerRegion.show(buttonsView);
            });

            buttonsView.on('save', function (options) {
                dialogView.$('.close').trigger('click');
                showMenus(options.model);
            });

            buttonsView.on('cancel', function () {
                dialogView.$('.close').trigger('click');
                showOpenMenus();
            });

            App.dialogRegion.show(dialogView);

        };

        var showMenus = function (openMenu) {
            require([
                'apps/private/apps/menus/menus_app'
            ], function () {
                App.PrivateApp.OpenMenusApp.trigger('menus:show', openMenu);
            });
        };

        var showOpenMenus = function () {
            App.PrivateApp.trigger('openMenus:show');
        };

        Dialog.Controller = {
            show: show
        };
    });

    return App.PrivateApp.OpenMenusApp.Common.Controllers.Dialog;

});
