define([
	'backbone.marionette',
    'hbs!apps/private/apps/open_menus/dialog/views/templates/breadcrumbs',
],
function (Marionette, template) {
	return Marionette.ItemView.extend({
		template: template,
		triggers: {
			'click a[href=#open-menus]': 'showOpenMenus'
		}
	});
});
