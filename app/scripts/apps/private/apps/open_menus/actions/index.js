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
            headerView.on('openMenu:new', function () {
                OpenMenusApp.trigger('openMenu:new');
            });
            tableView.on('childview:openMenu:show', function (itemView, options) {
                OpenMenusApp.trigger('openMenu:show', options.model.get('_id'));
            });
            tableView.on('childview:openMenu:delete', function (itemView, options) {
                OpenMenusApp.trigger('openMenu:delete', options.model.get('_id'));
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
