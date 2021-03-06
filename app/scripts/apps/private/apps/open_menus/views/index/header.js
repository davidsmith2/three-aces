define([
	'backbone.marionette',
	'app',
	'hbs!apps/private/apps/open_menus/views/index/templates/header'
], function (Marionette, App, template) {
	return Marionette.ItemView.extend({
		template: template,
		ui: {
			'new': '.js-new'
		},
		triggers: {
			'click @ui.new': 'openmenu:new'
		}
	});
});
