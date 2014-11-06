define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/show/views/templates/panel_button'
],

function (Marionette, template) {
	return Marionette.ItemView.extend({
		className: 'pull-right',
		template: template,
		triggers: {
			'click .js-edit': 'edit'
		}
	});
});
