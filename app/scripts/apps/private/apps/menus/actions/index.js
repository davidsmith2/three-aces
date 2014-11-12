define([
	'jquery',
	'app',
	'apps/private/apps/menus/views/index/header',
	'apps/private/apps/menus/views/index/table'
],

function ($, App, HeaderView, TableView) {
	return function (openMenuId) {
		$.when(App.request('menu:entities', openMenuId)).done(function (menus) {
            var headerView = new HeaderView();
            var tableView = new TableView({collection: menus});
            tableView.on('childview:menu:delete', function (itemView, options) {
                var menu = options.model,
                    openMenu = menu.get('open_menu');
                App.PrivateApp.MenusApp.trigger('menu:delete', openMenu.get('_id'), menu.get('_id'));
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
