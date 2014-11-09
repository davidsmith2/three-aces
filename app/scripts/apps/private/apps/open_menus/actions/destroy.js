define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'app',
    'apps/private/apps/open_menus/views/destroy/header',
    'apps/private/apps/open_menus/views/destroy/body',
    'apps/private/apps/open_menus/views/destroy/footer'
],

function (_, Backbone, Marionette, App, HeaderView, BodyView, FooterView) {
	return function (openMenu) {
        var headerView,
            bodyView,
            footerView;
        _.extend(openMenu.attributes, {title: 'Delete this open menu?'});
        headerView = new HeaderView({model: openMenu});
        bodyView = new BodyView({model: openMenu});
        footerView = new FooterView({model: openMenu});
        App.execute('dialog:show', {
            region: App.dialogRegion,
            headerView: headerView,
            bodyView: bodyView,
            footerView: footerView,
            callback: function (dialog) {
                footerView.on('yes no', dialog.dismiss, dialog);
                footerView.on('yes', openMenu.destroy, openMenu);
            }
        });
	};
});
