define([
	'backbone.marionette',
	'apps/private/apps/open_menus/list/views/open_menu',
	'hbs!apps/private/apps/open_menus/list/views/templates/open_menus'
], function (Marionette, View, template) {
	return Marionette.CompositeView.extend({
		className: 'table table-striped table-bordered',
		childView: View,
		childViewContainer: 'tbody',
		tagName: 'table',
		template: template
	});
});
