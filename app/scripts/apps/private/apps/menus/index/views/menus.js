define([
	'backbone.marionette',
	'apps/private/apps/menus/index/views/menu'
], function (Marionette, MenuView) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: MenuView
	});
});
