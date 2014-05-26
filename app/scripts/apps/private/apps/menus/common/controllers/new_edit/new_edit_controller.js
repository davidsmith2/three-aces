define([
    'app',
    'apps/private/apps/menus/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.MenusApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (menu) {

            var dialogView = new View.Dialog();

            var menuInfoView = new View.Form({
                model: menu
            });

            var buttonsView = new View.Buttons({
                model: menu
            });

            dialogView.on('show', function () {
                this.bodyRegion.show(menuInfoView);
                this.footerRegion.show(buttonsView);
            });

            buttonsView.on('save', function (options) {
                var menu = options.model;
                dialogView.$('.close').trigger('click');
                showMenuGroups(menu);
            });

            buttonsView.on('cancel', function (options) {
                var openMenu = options.model.get('openMenu');
                dialogView.$('.close').trigger('click');
                showMenus(openMenu);
            });

            App.dialogRegion.show(dialogView);

        };

        var showMenuGroups = function (menu) {
            require([
                'apps/private/apps/menu_groups/menu_groups_app'
            ], function () {
                App.PrivateApp.MenusApp.trigger('menuGroups:show', menu);
            });
        };

        var showMenus = function (openMenu) {
            App.PrivateApp.OpenMenusApp.trigger('menus:show', openMenu);
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };

    });

    return App.PrivateApp.MenusApp.Common.Controllers.NewEdit;

});