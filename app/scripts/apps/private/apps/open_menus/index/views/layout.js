define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/index/views/templates/layout'
], function (Marionette, template) {
	return Marionette.LayoutView.extend({
		template: template,
		regions: {
			headingRegion: '.heading-region',
			bodyRegion: '.body-region'
		}
	});
});
