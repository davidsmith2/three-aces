define([
	'app',
	'apps/private/apps/restaurant/views/show/header',
	'apps/private/common/views/form/form',
	'apps/private/common/views/panel/panel'
],

function (App, HeaderView, FormView) {
	return function (options) {
		App.execute('panel:show', {
			model: options.model,
			region: options.region,
			callback: function (panel) {
				var headerView = new HeaderView({
					model: options.model
				});
				var formView = new FormView({
	                model: options.model,
	                isReadOnly: true
	            });
				headerView.render();
				headerView.on('edit', function () {
					App.vent.trigger('restaurant:edit', options);
				});
				panel.ui.heading.addClass('clearfix');
				panel.headingRegion.show(headerView);
	            panel.bodyRegion.show(formView);
				App.vent.on('restaurant:save', function () {
					panel.render();
				});
			}
		});
	};
});
