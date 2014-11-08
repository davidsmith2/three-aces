define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/views/index/header',
	'apps/private/apps/open_menus/views/index/table'
], function ($, App, OpenMenusHeadingView, OpenMenusTableView) {
	return function () {
		$.when(App.request('openMenu:entities')).done(function (openMenus) {
			var openMenusHeadingView = new OpenMenusHeadingView(),
				openMenusTableView = new OpenMenusTableView({collection: openMenus});
			openMenusHeadingView.on('openMenu:new', function () {
				App.vent.trigger('openMenu:new');
			});
			openMenusTableView.on('childview:openMenu:show', function (itemView, options) {
				App.vent.trigger('openMenu:show', options.model.get('_id'));
			});
			openMenusTableView.on('childview:openMenu:delete', function (itemView, options) {
				App.vent.trigger('openMenu:delete', options.model.get('_id'));
			});
			App.execute('panel:show:1', {
				region: App.mainRegion,
				headingView: openMenusHeadingView,
				bodyView: openMenusTableView,
				callbacks: {
					onRender: function (panel) {
						panel.ui.heading.addClass('clearfix');
					}
				}
			});
		});
	};
});
