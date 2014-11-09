define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/views/index/header',
	'apps/private/apps/open_menus/views/index/table',
    'apps/private/common/views/panel/panel'
], function ($, App, HeaderView, TableView) {
	return function () {
		$.when(App.request('openMenu:entities')).done(function (openMenus) {
            var headerView,
                tableView;
			headerView = new HeaderView();
			tableView = new TableView({collection: openMenus});
			App.execute('panel:show', {
				region: App.mainRegion,
				headingView: headerView,
				bodyView: tableView,
				callback: function (panel) {
					panel.ui.heading.addClass('clearfix');
				}
			});
		});
	};
});
