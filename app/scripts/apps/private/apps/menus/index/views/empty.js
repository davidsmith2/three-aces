define([
	'backbone.marionette',
	'hbs!apps/private/apps/menus/index/views/templates/empty'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		className: 'alert alert-info',
		template: template
	});
});
