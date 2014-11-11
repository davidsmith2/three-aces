define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/menus/views/destroy/header',
    'apps/private/apps/menus/views/destroy/body',
    'apps/private/apps/menus/views/destroy/footer'
],
function ($, _, App, HeaderView, BodyView, FooterView) {
	return function (openMenuId, menuId) {
        $.when(App.request('menu:entity', menuId)).done(function (menu) {
            var headerView,
                bodyView,
                footerView;
            _.extend(menu.attributes, {title: 'Delete this menu?'});
            headerView = new HeaderView({model: menu});
            bodyView = new BodyView({model: menu});
            footerView = new FooterView({model: menu});
            App.execute('dialog:show', {
                region: App.dialogRegion,
                headerView: headerView,
                bodyView: bodyView,
                footerView: footerView,
                callback: function (dialog) {
                    footerView.on('confirm', function (options) {
                        App.PrivateApp.MenusApp.trigger('menu:delete:done', options.model);
                        menu.destroy();
                        dialog.dismiss();
                    });
                    footerView.on('cancel', function (options) {
                        App.PrivateApp.MenusApp.trigger('menu:delete:done', options.model);
                        dialog.dismiss();
                    });
                }
            });
        });
	};
});
