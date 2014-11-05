define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/show/views/templates/layout'
], function (Marionette, template) {
	return Marionette.LayoutView.extend({
		template: template,
		regions: {
			'a': '#a',
			'b': '#b',
			'c': '#c'
		}
	});
});
