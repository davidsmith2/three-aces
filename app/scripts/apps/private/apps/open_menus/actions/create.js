define([
	'jquery',
	'app',
	'apps/private/common/views/dialog/dialog',
	'apps/private/common/views/dialog/dialog-footer',
	'apps/private/common/views/form/form'
], function ($, App, DialogView, DialogFooterView, FormView) {
	return function () {
		var gettingOpenMenu = App.request('openMenu:entity:new'),
			gettingOpenMenus = App.request('openMenu:entities');
		$.when(gettingOpenMenu, gettingOpenMenus).done(function (openMenu, openMenus) {
            App.execute('dialog:show', {
                model: openMenu.get('restaurant_info'),
                callback: function (dialog) {
					var dialogTitle = '<h3>Restaurant</h3>';
					var dialogBodyView = new FormView({
						model: openMenu.get('restaurant_info')
					});
					var dialogFooterView = App.request('dialog:footer:create', {
						model: openMenu,
						buttons: {
							save: true,
							saveClose: true,
							cancel: true
						}
					});
					dialogFooterView.on('save', function (options) {
						openMenus.create(options.model, {
							success: function () {
								dialog.dismiss();
								App.vent.trigger('openMenu:show', options.model.get('_id'));
							}
						});
					});
					dialogFooterView.on('saveClose', function (options) {
						openMenus.create(options.model, {
							success: function () {
								dialog.dismiss();
								App.vent.trigger('openMenus:index');
							}
						});
					});
					dialogFooterView.on('cancel', function (options) {
						options.model.destroy();
						dialog.dismiss();
						App.vent.trigger('openMenus:index');
					});
					dialog.ui.title.html(dialogTitle);
					dialog.bodyRegion.show(dialogBodyView);
					dialog.footerRegion.show(dialogFooterView);
                }
            });
		});
	};
});
