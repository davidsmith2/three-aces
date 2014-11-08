define([
	'backbone.marionette',
	'hbs!apps/private/apps/menus/views/index/templates/header'
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
