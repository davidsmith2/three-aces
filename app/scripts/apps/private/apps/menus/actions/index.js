define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/show/views/menus',
	'apps/private/apps/open_menus/show/views/panel'
],

function ($, App, MenusView, PanelView) {
	return function (options) {
		$.when(App.request('menu:entities', options.model)).done(function (menus) {
			var panelView = new PanelView({
				collection: menus,
				callback: function (panel) {
		            var panelBodyView = new MenusView({
		                collection: menus
		            });
					panel.ui.heading.append('<h2 class="panel-title">Menus</h2>');
		            panel.bodyRegion.show(panelBodyView);
				}
			});
			options.region.show(panelView);
		});
	};
});
