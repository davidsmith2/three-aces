define([
	'jquery',
	'app',
	'apps/private/apps/menus/views/index/header',
	'apps/private/apps/menus/views/index/table',
	'apps/private/apps/menus/views/index/panel'
],

function ($, App, HeaderView, TableView) {
	return function (options) {
		$.when(App.request('menu:entities', options.model)).done(function (menus) {
			App.execute('panel:show', {
				region: options.region,
				callback: function (panel) {
		            var headerView = new HeaderView();
		            var tableView = new TableView({
		                collection: menus
		            });
					panel.ui.heading.addClass('clearfix');
					panel.headingRegion.show(headerView);
		            panel.bodyRegion.show(tableView);
				}
			});
		});
	};
});
