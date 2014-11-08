define([
	'backbone.marionette',
	'hbs!apps/private/apps/menus/views/index/templates/tableRow'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		tagName: 'tr',
		className: 'row',
		triggers: {
			'click td .js-show': 'menu:show',
			'click td .js-edit': 'menu:edit',
			'click td .js-delete': 'menu:delete'
		}
	});
});
