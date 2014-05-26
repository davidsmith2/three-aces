define([
    'app',
    'apps/private/apps/open_menus/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.OpenMenusApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (openMenu) {

            var dialogView = new View.Dialog();

            var tabsView = new View.Tabs({
                model: openMenu
            });

            var restaurantView = new View.Form({
                model: openMenu.get('restaurantInfo')
            });

            var environmentView = new View.Form({
                model: openMenu.get('environment')
            });

            var buttonsView = new View.Buttons({
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

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };
    });

    return App.PrivateApp.OpenMenusApp.Common.Controllers.NewEdit;

});