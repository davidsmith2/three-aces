define([
	'backbone.marionette',
	'hbs!apps/private/apps/environment/views/update/templates/header'
],

function (Marionette, template) {
	return Marionette.ItemView.extend({
		tagName: 'h2',
		template: template
	});
});
