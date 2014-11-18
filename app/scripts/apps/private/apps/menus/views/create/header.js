define([
	'backbone.marionette',
	'hbs!apps/private/apps/menus/views/create/templates/header'
],

function (Marionette, template) {
	return Marionette.ItemView.extend({
		tagName: 'h2',
		template: template
	});
});
