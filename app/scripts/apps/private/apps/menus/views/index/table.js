define([
	'backbone.marionette',
	'apps/private/apps/menus/views/index/empty',
	'apps/private/apps/menus/views/index/tableRow'
], function (Marionette, EmptyView, TableRowView) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: TableRowView,
		emptyView: EmptyView
	});
});
