define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/views/show/templates/layout'
], function (Marionette, template) {
	return Marionette.LayoutView.extend({
		template: template,
		regions: {
			'restaurantRegion': '#restaurant-region',
			'environmentRegion': '#environment-region',
			'menusRegion': '#menus-region'
		}
	});
});
