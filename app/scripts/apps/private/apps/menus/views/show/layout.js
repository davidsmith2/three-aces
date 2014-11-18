define([
	'backbone.marionette',
	'hbs!apps/private/apps/menus/views/show/templates/layout'
], function (Marionette, template) {
	return Marionette.LayoutView.extend({
		template: template,
		regions: {
			'menuRegion': '#menu-region',
			'menuGroupsRegion': '#menu-groups-region',
			'menuItemsRegion': '#menu-items-region'
		}
	});
});
