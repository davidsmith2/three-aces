define([
	'backbone.marionette',
	'apps/private/apps/open_menus/index/views/empty',
	'apps/private/apps/open_menus/index/views/open_menus_table_row'
], function (Marionette, EmptyView, OpenMenusTableRowView) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: OpenMenusTableRowView,
		emptyView: EmptyView
	});
});
