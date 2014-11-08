define([
	'backbone.marionette',
	'hbs!apps/private/apps/environment/show/views/templates/panel_heading'
],

function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		triggers: {
			'click .js-edit': 'edit'
		}
	});
});