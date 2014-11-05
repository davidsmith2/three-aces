define([
    'app',
    'apps/private/common/views/buttons',
    'apps/private/common/views/dialog',
    'apps/private/common/views/form'
], function (App, ButtonsView, DialogView, FormView) {

    App.module('PrivateApp.OpenMenusApp.Common.Controllers.Dialog', function (Dialog, App, Backbone, Marionette, $, _) {

        var show = function (openMenu) {

            var dialogView = new DialogView();

            var buttonsView = new ButtonsView({
                model: openMenu
            });

            var formView = new FormView({
                model: openMenu.get('restaurant_info')
            });

            dialogView.on('show', function () {
                $(this.titleRegion.el).html('<h3>Title</h3>');
                this.bodyRegion.show(formView);
                this.footerRegion.show(buttonsView);
            });

            buttonsView.on('save', function (options) {
                dialogView.$('.close').trigger('click');
                showOpenMenu(this.model);
            });

            buttonsView.on('cancel', function () {
                dialogView.$('.close').trigger('click');
                showOpenMenus();
            });

            App.dialogRegion.show(dialogView);

        };

        var showOpenMenu = function (openMenu) {
            App.PrivateApp.OpenMenusApp.trigger('openMenu:show', openMenu);
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
