define([
    'app',
    'apps/private/apps/menu_groups/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.MenuGroupsApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (menuGroup) {

            var dialogView = new View.Dialog();

            var menuGroupView = new View.Form({
                model: menuGroup
            });

            var buttonsView = new View.Buttons({
                model: menuGroup
            });

            dialogView.on('show', function () {
                this.bodyRegion.show(menuGroupView);
                this.footerRegion.show(buttonsView);
            });

            buttonsView.on('save', function (options) {
                var menuGroup = options.model;
                dialogView.$('.close').trigger('click');
                showMenuItems(menuGroup);
            });

            buttonsView.on('cancel', function (options) {
                var menu = options.model.get('menu');
                dialogView.$('.close').trigger('click');
                showMenuGroups(menu);
            });

            App.dialogRegion.show(dialogView);

        };

        var showMenuItems = function (menuGroup) {
            require([
                'apps/private/apps/menu_items/menu_items_app'
            ], function () {
                App.PrivateApp.MenuGroupsApp.trigger('menuItems:show', menuGroup);
            });
        };

        var showMenuGroups = function (menu) {
            App.PrivateApp.MenusApp.trigger('menuGroups:show', menu);
        };

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };

    });

    return App.PrivateApp.MenuGroupsApp.Common.Controllers.NewEdit;

});