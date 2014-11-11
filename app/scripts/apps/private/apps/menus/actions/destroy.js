define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/menus/views/destroy/header',
    'apps/private/apps/menus/views/destroy/body',
    'apps/private/apps/menus/views/destroy/footer'
],
function ($, _, App, HeaderView, BodyView, FooterView) {
	return function (menu) {
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
                footerView.on('confirm', menu.destroy, menu);
                footerView.on('confirm cancel', function () {
                    dialog.dismiss();
                    App.navigate('!/openmenus/' + menu.get('open_menu'));
                });
            }
        });
	};
});
