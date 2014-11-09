define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'app',
    'apps/private/apps/menus/views/destroy/header',
    'apps/private/apps/menus/views/destroy/body',
    'apps/private/apps/menus/views/destroy/footer'
],
function (_, Backbone, Marionette, App, HeaderView, BodyView, FooterView) {
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
                footerView.on('yes no', dialog.dismiss, dialog);
                footerView.on('yes', menu.destroy, menu);
            }
        });
	};
});
