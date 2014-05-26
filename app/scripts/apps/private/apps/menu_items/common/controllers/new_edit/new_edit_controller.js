define([
    'app',
    'apps/private/apps/menu_items/common/views/new_edit/new_edit_view'
], function (App, View) {

    App.module('PrivateApp.MenuItemsApp.Common.Controllers.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        var createOrUpdate = function (menuItem) {

            var dialogView = new View.Dialog();

            var menuItemView = new View.Form({
                model: menuItem
            });

            var buttonsView = new View.Buttons({
                model: menuItem
            });

            dialogView.on('show', function () {
                this.bodyRegion.show(menuItemView);
                this.footerRegion.show(buttonsView);
            });

            buttonsView.on('save', function (options) {
                var menuGroup = options.model.get('menuGroup');
                dialogView.$('.close').trigger('click');
                showMenuItems(menuGroup);
            });

            buttonsView.on('cancel', function (options) {
                var menuGroup = options.model.get('menuGroup');
                dialogView.$('.close').trigger('click');
                showMenuItems(menuGroup);
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

        NewEdit.Controller = {
            createOrUpdate: createOrUpdate
        };

    });

    return App.PrivateApp.MenuItemsApp.Common.Controllers.NewEdit;

});