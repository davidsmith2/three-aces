define([
	'app',
	'apps/private/apps/environment/views/show/header',
	'apps/private/common/views/form/form',
	'apps/private/common/views/panel/panel'
],

function (App, PanelHeadingView, FormView) {
	return function (options) {
		App.execute('panel:show', {
			model: options.model,
			region: options.region,
			callback: function (panel) {
				var panelHeadingView = new PanelHeadingView({
					model: options.model
				});
				var formView = new FormView({
	                model: options.model,
	                isReadOnly: true
	            });
				panelHeadingView.render();
				panelHeadingView.on('edit', function () {
					App.vent.trigger('environment:edit', options);
				});
				panel.ui.heading.addClass('clearfix');
	            panel.headingRegion.show(panelHeadingView);
	            panel.bodyRegion.show(formView);
				App.vent.on('environment:save', function () {
					panel.render();
				});
			}
		});
	};
});
