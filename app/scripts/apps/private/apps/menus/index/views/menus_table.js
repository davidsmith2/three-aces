define([
	'backbone.marionette',
	'apps/private/apps/menus/index/views/empty',
	'apps/private/apps/menus/index/views/menus_table_row'
], function (Marionette, EmptyView, MenusTableRowView) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: MenusTableRowView,
		emptyView: EmptyView
	});
});
