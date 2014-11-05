define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/show/views/templates/menu'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		tagName: 'tr',
		triggers: {
			'click td .js-show': 'menu:show',
			'click td .js-edit': 'menu:edit',
			'click td .js-delete': 'menu:delete'
		}
	});
});
