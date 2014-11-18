define([
	'jquery',
	'app',
	'apps/private/apps/menus/views/index/header',
	'apps/private/apps/menus/views/index/table'
],

function ($, App, HeaderView, TableView) {
    var PrivateApp = App.PrivateApp,
        MenusApp = PrivateApp.MenusApp;
	return function (openMenuId) {
        var gettingMenus = App.request('menu:entities', openMenuId);
		$.when(gettingMenus).done(function (menus) {
            var headerView = new HeaderView();
            var tableView = new TableView({collection: menus});
            PrivateApp.collections.menus = menus;
            headerView.on('menu:new', function () {
                MenusApp.trigger('menu:new', openMenuId);
            });
            tableView.on('childview:menu:show', function (itemView, options) {
                var menu = options.model,
                    openMenu = menu.get('open_menu');
                MenusApp.trigger('menu:show', openMenu.get('_id'), menu.get('_id'));
            });
            tableView.on('childview:menu:delete', function (itemView, options) {
                var menu = options.model,
                    openMenu = menu.get('open_menu');
                MenusApp.trigger('menu:delete', openMenu.get('_id'), menu.get('_id'));
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
