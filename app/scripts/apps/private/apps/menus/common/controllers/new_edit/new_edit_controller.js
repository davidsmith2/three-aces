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
                dialogView.$('.close').trigger('click');
                showMenuGroups(options.model);
            });

            buttonsView.on('cancel', function (options) {
                dialogView.$('.close').trigger('click');
                showMenus({
                    model: options.model
                });
            });

            App.dialogRegion.show(dialogView);

        };

        var showMenuGroups = function (options) {
            require([
                'apps/private/apps/menu_groups/menu_groups_app'
            ], function () {
                App.PrivateApp.MenusApp.trigger('menuGroups:show', options);
            });
        };

        var showMenus = function (options) {
            App.PrivateApp.OpenMenusApp.trigger('menus:show', options);
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };

    });

    return App.PrivateApp.MenusApp.Common.Controllers.NewEdit;

});