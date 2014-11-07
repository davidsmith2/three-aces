define([
	'app',
	'apps/private/common/views/dialog',
	'apps/private/common/views/form',
	'apps/private/apps/open_menus/dialog/views/footer'
], function (App, DialogView, DialogBodyView, DialogFooterView) {
	App.module('PrivateApp.OpenMenusApp.Common.Controllers.Dialog', function (Dialog, App) {
		var show = function (openMenu) {
			App.execute('dialog:show', {
				model: openMenu,
				callback: function (dialog) {
					onShow(openMenu, dialog);
				}
			});
		};
		var onShow = function (openMenu, dialog) {
			var title = '<h3>Restaurant</h3>';
			var bodyView = new DialogBodyView({
				model: openMenu.get('restaurant_info')
			});
			var footerView = App.request('dialog:footer:create', {
				model: openMenu,
				buttons: {
					save: true,
					saveClose: true,
					cancel: true
				}
			});
			dialog.ui.title.html(title);
			dialog.bodyRegion.show(bodyView);
			dialog.footerRegion.show(footerView);
			footerView.on('save', function (options) {
				options.model.save();
				dialog.dismiss();
				App.PrivateApp.OpenMenusApp.trigger('openMenu:show', options.model);
			});
			footerView.on('saveClose', function (options) {
				options.model.save();
				dialog.dismiss();
				App.PrivateApp.trigger('openMenus:show');
			});
			footerView.on('cancel', function (options) {
				options.model.destroy();
				dialog.dismiss();
				App.PrivateApp.trigger('openMenus:show');
			});
		};
		Dialog.Controller = {
			show: show
		};
	});
	return App.PrivateApp.OpenMenusApp.Common.Controllers.Dialog;
});
