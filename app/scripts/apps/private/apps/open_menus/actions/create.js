define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/open_menus/views/create/footer',
    'apps/private/apps/open_menus/views/create/header',
    'apps/private/common/views/form/form',
    'apps/private/common/views/dialog/dialog'
], function ($, _, App, FooterView, HeaderView, FormView) {
    var PrivateApp = App.PrivateApp,
        OpenMenusApp = PrivateApp.OpenMenusApp;
    return function () {
        var gettingOpenMenu = App.request('openmenu:entity:new');
        $.when(gettingOpenMenu).done(function (openMenu) {
            var headerView,
                formView,
                footerView;
            _.extend(openMenu.attributes, {title: 'Create an open menu'});
            headerView = new HeaderView({model: openMenu});
            formView = new FormView({model: openMenu.get('restaurant_info')});
            footerView = new FooterView({model: openMenu});
            footerView.on('save', function (options) {
                PrivateApp.collections.openMenus.create(options.model, {
                    success: function (openMenu) {
                        OpenMenusApp.trigger('openmenu:show', openMenu.get('_id'));
                    }
                });
            });
            footerView.on('saveClose', function (options) {
                PrivateApp.collections.openMenus.create(options.model, {
                    success: function () {
                        OpenMenusApp.trigger('openmenu:index');
                    }
                });
            });
            footerView.on('cancel', function (options) {
                options.model.destroy();
                OpenMenusApp.trigger('openmenu:index');
            });
            App.execute('dialog:show', {
                region: App.dialogRegion,
                headerView: headerView,
                bodyView: formView,
                footerView: footerView,
                callback: function (dialog) {
                    footerView.on('save saveClose cancel', dialog.dismiss, dialog);
                }
            });
        });
    };
});
