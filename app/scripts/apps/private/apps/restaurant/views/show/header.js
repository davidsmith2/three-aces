define([
	'backbone.marionette',
	'hbs!apps/private/apps/restaurant/views/show/templates/header'
],

function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		triggers: {
			'click .js-edit': 'edit'
		}
	});
});
