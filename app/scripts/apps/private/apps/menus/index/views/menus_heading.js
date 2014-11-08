define([
	'backbone.marionette',
	'hbs!apps/private/apps/menus/index/views/templates/menus_heading'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		ui: {
			'new': '.js-new'
		},
		triggers: {
			'click @ui.new': 'menu:new'
		}
	});
});
