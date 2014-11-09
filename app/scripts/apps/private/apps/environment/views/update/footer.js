define([
	'backbone.marionette',
	'hbs!apps/private/apps/environment/views/update/templates/footer'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		triggers: {
			'click .js-save': 'save',
			'click .js-cancel': 'cancel'
		}
	});
});
