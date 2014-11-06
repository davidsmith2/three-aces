define([
	'backbone.marionette',
	'apps/private/apps/open_menus/show/views/menu'
], function (Marionette, MenuView) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: MenuView
	});
});
