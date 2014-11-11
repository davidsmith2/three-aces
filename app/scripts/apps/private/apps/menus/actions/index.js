define([
	'jquery',
	'app',
	'apps/private/apps/menus/views/index/header',
	'apps/private/apps/menus/views/index/table'
],

function ($, App, HeaderView, TableView) {
	return function (options) {
		$.when(App.request('menu:entities', options.model)).done(function (menus) {
            var headerView = new HeaderView();
            var tableView = new TableView({
                collection: menus
            });
			App.execute('panel:show', {
				region: App.menusRegion,
				headingView: headerView,
				bodyView: tableView,
				callback: function (panel) {
					panel.ui.heading.addClass('clearfix');
				}
			});
		});
	};
});
