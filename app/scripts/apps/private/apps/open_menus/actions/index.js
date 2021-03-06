define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/views/index/header',
	'apps/private/apps/open_menus/views/index/table',
    'apps/private/common/views/panel/panel'
], function ($, App, HeaderView, TableView) {
    var OpenMenusApp = App.PrivateApp.OpenMenusApp;
	return function () {
        var gettingOpenMenus = App.request('openmenu:entities');
		$.when(gettingOpenMenus).done(function (openMenus) {
            var headerView,
                tableView;
            App.PrivateApp.collections.openMenus = openMenus;
			headerView = new HeaderView();
			tableView = new TableView({collection: openMenus});
            headerView.on('openmenu:new', function () {
                OpenMenusApp.trigger('openmenu:new');
            });
            tableView.on('childview:openmenu:show', function (itemView, options) {
                OpenMenusApp.trigger('openmenu:show', options.model.get('_id'));
            });
            tableView.on('childview:openmenu:delete', function (itemView, options) {
                OpenMenusApp.trigger('openmenu:delete', options.model.get('_id'));
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
