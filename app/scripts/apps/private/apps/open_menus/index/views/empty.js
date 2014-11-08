define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/index/views/templates/empty'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		className: 'alert alert-info',
		template: template
	});
});
