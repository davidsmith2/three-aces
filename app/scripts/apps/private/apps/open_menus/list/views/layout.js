define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/list/views/templates/layout'
], function (Marionette, template) {
	return Marionette.LayoutView.extend({
		template: template,
		regions: {
			panelRegion: '.panel-region',
			listRegion: '.list-region'
		}
	});
});
