define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/views/index/header',
	'apps/private/apps/open_menus/views/index/table'
], function ($, App, HeaderView, TableView) {
	return function () {
		$.when(App.request('openMenu:entities')).done(function (openMenus) {
			var headerView = new HeaderView();
			var tableView = new TableView({collection: openMenus});
			App.execute('panel:show:1', {
				region: App.mainRegion,
				headingView: headerView,
				bodyView: tableView,
				callbacks: {
					onRender: function (panel) {
						panel.ui.heading.addClass('clearfix');
					}
				}
			});
		});
	};
});
