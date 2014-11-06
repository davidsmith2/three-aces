define([
	'backbone.marionette',
	'apps/private/apps/open_menus/list/views/open_menu'
], function (Marionette, OpenMenuView, template) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: OpenMenuView
	});
});
