define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/list/views/templates/open_menu'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		tagName: 'tr',
		className: 'row',
		ui: {
			'show':     '.js-show',
			'delete':   '.js-delete'
		},
		triggers: {
			'click @ui.show':   'openMenu:show',
			'click @ui.delete': 'openMenu:delete'
		}
	});
});
