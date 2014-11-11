define([
	'jquery',
	'app',
	'apps/private/apps/menus/views/index/header',
	'apps/private/apps/menus/views/index/table'
],

function ($, App, HeaderView, TableView) {
	return function (openMenu) {
		$.when(App.request('menu:entities', openMenu)).done(function (menus) {
            var headerView = new HeaderView();
            var tableView = new TableView({collection: menus});
            tableView.on('childview:menu:delete', function (itemView, options) {
                App.PrivateApp.MenusApp.trigger('menu:delete', options.model);
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
