define([
	'backbone.marionette',
	'hbs!apps/private/apps/environment/views/show/templates/header'
],

function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		triggers: {
			'click .js-edit': 'edit'
		}
	});
});
