define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/index/views/templates/open_menus_heading'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		ui: {
			'new': '.js-new'
		},
		triggers: {
			'click @ui.new': 'openMenu:new'
		}
	});
});
