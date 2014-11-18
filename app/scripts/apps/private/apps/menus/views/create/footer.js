define([
	'backbone.marionette',
	'hbs!apps/private/apps/menus/views/create/templates/footer'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		triggers: {
			'click .js-save': 'save',
			'click .js-save-close': 'saveClose',
			'click .js-cancel': 'cancel'
		}
	});
});
