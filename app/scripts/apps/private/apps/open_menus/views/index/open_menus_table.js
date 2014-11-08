define([
	'backbone.marionette',
	'apps/private/apps/open_menus/views/index/open_menus_table_row'
], function (Marionette, OpenMenusTableRowView) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: OpenMenusTableRowView
	});
});
