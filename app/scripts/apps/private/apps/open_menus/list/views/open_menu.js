define([
	'backbone.marionette',
	'hbs!apps/private/apps/open_menus/list/views/templates/open_menu'
], function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		tagName: 'tr',
		ui: {
			'show':     '.js-show',
			'edit':     '.js-edit',
			'delete':   '.js-delete'
		},
		triggers: {
			'click @ui.show':   'openMenu:show',
			'click @ui.edit':   'openMenu:edit',
			'click @ui.delete': 'openMenu:delete'
		}
	});
});
