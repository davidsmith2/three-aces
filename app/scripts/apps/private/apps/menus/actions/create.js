define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/menus/views/create/footer',
    'apps/private/apps/menus/views/create/header',
    'apps/private/common/views/form/form'
], function ($, _, App, FooterView, HeaderView, FormView) {
    var PrivateApp = App.PrivateApp,
        MenusApp = PrivateApp.MenusApp;
    return function () {
        var gettingMenu = App.request('menu:entity:new');
        $.when(gettingMenu).done(function (menu) {
            var headerView,
                formView,
                footerView;
            _.extend(menu.attributes, {title: 'Create a menu'});
            headerView = new HeaderView({model: menu});
            formView = new FormView({model: menu});
            footerView = new FooterView({model: menu});
            footerView.on('save', function (options) {
                PrivateApp.collections.menus.create(options.model, {
                    success: function (_menu) {
                        var openMenu = _menu.get('open_menu');
                        MenusApp.trigger('menu:show', openMenu.get('_id'), _menu.get('_id'));
                    }
                });
            });
            footerView.on('saveClose', function (options) {
                PrivateApp.collections.menus.create(options.model, {
                    success: function (_menu) {
                        var openMenu = _menu.get('open_menu');
                        MenusApp.trigger('menu:index', openMenu.get('_id'));
                    }
                });
            });
            footerView.on('cancel', function (options) {
                options.model.destroy();
                MenusApp.trigger('menu:index');
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
