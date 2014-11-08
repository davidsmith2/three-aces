define([
	'app',
	'apps/private/apps/open_menus/show/views/panel',
	'apps/private/apps/open_menus/show/views/panel_button',
	'apps/private/common/views/form'
],

function (App, PanelView, PanelButtonView, FormView) {
	return function (options) {
		var panelView = new PanelView({
			model: options.model,
			callback: function (panel) {
				var panelButtonView = new PanelButtonView({
					model: options.model
				});
				var panelBodyView = new FormView({
	                model: options.model,
	                isReadOnly: true
	            });
				panelButtonView.render();
				panelButtonView.on('edit', function () {
					App.vent.trigger('restaurant:edit', options);
				});
				panel.ui.heading.addClass('clearfix');
				panel.ui.heading.append('<h2 class="panel-title pull-left">Restaurant</h2>');
				panel.ui.heading.append(panelButtonView.el);
	            panel.bodyRegion.show(panelBodyView);
				App.vent.on('restaurant:save', function () {
					panel.render();
				});
			}
		});
		options.region.show(panelView);
	};
});
