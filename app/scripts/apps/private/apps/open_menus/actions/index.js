define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/index/views/open_menus_heading',
	'apps/private/apps/open_menus/index/views/open_menus_table',
	'apps/private/common/views/panel/panel'
], function ($, App, OpenMenusHeadingView, OpenMenusTableView) {
	return function () {
		$.when(App.request('openMenu:entities')).done(function (openMenus) {
			App.execute('panel:show', {
				region: App.mainRegion,
				callback: function (panel) {
					var openMenusHeadingView = new OpenMenusHeadingView();
					var openMenusTableView = new OpenMenusTableView({
						collection: openMenus
					});
					openMenusHeadingView.on('openMenu:new', function () {
						App.vent.trigger('openMenu:new');
					});
					openMenusTableView.on('childview:openMenu:show', function (itemView, options) {
						App.vent.trigger('openMenu:show', options.model.get('_id'));
					});
					openMenusTableView.on('childview:openMenu:delete', function (itemView, options) {
						App.vent.trigger('openMenu:delete', options.model.get('_id'));
					});
					panel.ui.heading.addClass('clearfix');
					panel.headingRegion.show(openMenusHeadingView);
					panel.bodyRegion.show(openMenusTableView);
				}
			});
		});
	};
});
