define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/dialog/views/templates/footer'
], function (Marionette, Template) {
	return Marionette.ItemView.extend({
		template: Template,
		triggers: {
			'click .js-save': 'save',
			'click .js-save-close': 'saveClose',
			'click .js-cancel': 'cancel'
		}
	});
});
