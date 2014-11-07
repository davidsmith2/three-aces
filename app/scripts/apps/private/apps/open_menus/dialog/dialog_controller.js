define([
	'app',
	'apps/private/common/views/dialog',
	'apps/private/common/views/form',
	'apps/private/apps/open_menus/dialog/views/footer'
], function (App, DialogView, DialogBodyView, DialogFooterView) {
	App.module('PrivateApp.OpenMenusApp.Common.Controllers.Dialog', function (Dialog, App, Backbone, Marionette, $) {
		var show = function (openMenu) {
			var dialogView,
				dialogTitle,
				dialogBodyView,
				dialogFooterView;
			dialogView = new DialogView();
			dialogTitle = '<h3>Title</h3>';
			dialogBodyView = new DialogBodyView({
				model: openMenu.get('restaurant_info')
			});
			dialogFooterView = new DialogFooterView({
				model: openMenu
			});
			dialogView.on('show', function () {
				$(this.titleRegion.el).html(dialogTitle);
				this.bodyRegion.show(dialogBodyView);
				this.footerRegion.show(dialogFooterView);
			});
			dialogFooterView.on('save', function (options) {
				options.model.save();
				dialogView.dismiss();
				App.PrivateApp.OpenMenusApp.trigger('openMenu:show', options.model);
			});
			dialogFooterView.on('saveClose', function (options) {
				options.model.save();
				dialogView.dismiss();
				App.PrivateApp.trigger('openMenus:show');
			});
			dialogFooterView.on('cancel', function (options) {
				options.model.destroy();
				dialogView.dismiss();
				App.PrivateApp.trigger('openMenus:show');
			});
			App.dialogRegion.show(dialogView);
		};
		Dialog.Controller = {
			show: show
		};
	});
	return App.PrivateApp.OpenMenusApp.Common.Controllers.Dialog;
});
