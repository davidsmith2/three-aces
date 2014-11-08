define([
	'jquery',
	'app',
	'apps/private/apps/open_menus/list/views/layout',
	'apps/private/apps/open_menus/list/views/open_menus',
	'apps/private/apps/open_menus/list/views/panel',
], function ($, App, LayoutView, OpenMenusView, PanelView) {
	return function () {
		$.when(App.request('openMenu:entities')).done(function (openMenus) {
			var layoutView = new LayoutView();
			var panelView = new PanelView();
			var openMenusView = new OpenMenusView({
				collection: openMenus
			});
			panelView.on('openMenu:new', function () {
				App.vent.trigger('openMenu:new');
			});
			openMenusView.on('childview:openMenu:show', function (itemView, options) {
				App.vent.trigger('openMenu:show', options.model.get('_id'));
			});
			openMenusView.on('childview:openMenu:delete', function (itemView, options) {
				App.vent.trigger('openMenu:delete', options.model.get('_id'));
			});
			App.mainRegion.show(layoutView);
			layoutView.panelRegion.show(panelView);
			layoutView.listRegion.show(openMenusView);
		});
	};
});
