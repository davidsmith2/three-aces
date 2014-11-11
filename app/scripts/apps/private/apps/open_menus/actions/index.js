define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/views/index/header',
	'apps/private/apps/open_menus/views/index/table',
    'apps/private/common/views/panel/panel'
], function ($, App, HeaderView, TableView) {
    var OpenMenusApp = App.PrivateApp.OpenMenusApp;
	return function () {
		$.when(App.request('openMenu:entities')).done(function (openMenus) {
            var headerView,
                tableView;
			headerView = new HeaderView();
			tableView = new TableView({collection: openMenus});
            headerView.on('openmenu:new', function () {
                OpenMenusApp.trigger('openmenu:new');
            });
            tableView.on('childview:openmenu:show', function (itemView, options) {
                OpenMenusApp.trigger('openmenu:show', options.model);
            });
            tableView.on('childview:openmenu:delete', function (itemView, options) {
                OpenMenusApp.trigger('openmenu:delete', options.model);
            });
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
