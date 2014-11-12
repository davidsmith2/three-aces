define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/menus/views/destroy/header',
    'apps/private/apps/menus/views/destroy/body',
    'apps/private/apps/menus/views/destroy/footer'
],
function ($, _, App, HeaderView, BodyView, FooterView) {
    var onBeforeDialogDismiss = function (dialog, options) {
        var openMenu = options.model.get('open_menu');
        App.PrivateApp.MenusApp.trigger('menu:delete:done', openMenu.get('_id'));
        dialog.dismiss();
    };
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
                        onBeforeDialogDismiss(dialog, options);
                        menu.destroy();
                    });
                    footerView.on('cancel', function (options) {
                        onBeforeDialogDismiss(dialog, options);
                    });
                }
            });
        });
	};
});
