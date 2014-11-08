define([
	'jquery',
	'app',
	'apps/private/apps/menus/index/views/menus_heading',
	'apps/private/apps/menus/index/views/menus_table',
	'apps/private/apps/menus/index/views/panel'
],

function ($, App, MenusHeadingView, MenusTableView) {
	return function (options) {
		$.when(App.request('menu:entities', options.model)).done(function (menus) {
			App.execute('panel:show', {
				region: options.region,
				callback: function (panel) {
		            var menusHeadingView = new MenusHeadingView();
		            var menusTableView = new MenusTableView({
		                collection: menus
		            });
					panel.ui.heading.addClass('clearfix');
					panel.headingRegion.show(menusHeadingView);
		            panel.bodyRegion.show(menusTableView);
				}
			});
		});
	};
});
