define([
	'app',
	'apps/private/common/views/dialog/dialog',
	'apps/private/common/views/form/form'
],

function (App, DialogView, FormView) {
	return function (options) {
        App.execute('dialog:show', {
            model: options.model,
            callback: function (dialog) {
				var dialogTitle,
					dialogBodyView,
					dialogFooterView;
				dialogTitle = '<h2 class="h2-modal-title">Edit restaurant</h2>';
				dialogBodyView = new FormView({
					model: options.model
				});
				dialogFooterView = App.request('dialog:footer:create', {
					model: options.model,
					buttons: {
						save: true,
						saveClose: false,
						cancel: true
					}
				});
				dialogFooterView.on('save', function (options) {
					options.model.save(options.model.attributes);
					dialog.dismiss();
					App.vent.trigger('restaurant:save', {
						model: options.model
					});
				});
				dialogFooterView.on('cancel', function (options) {
					dialog.dismiss();
					App.vent.trigger('restaurant:cancel', {
						model: options.model
					});
				});
				dialog.ui.title.html(dialogTitle);
				dialog.bodyRegion.show(dialogBodyView);
				dialog.footerRegion.show(dialogFooterView);
            }
        });
	};
});
