define([
	'backbone.marionette',
	'apps/private/apps/open_menus/show/views/menu',
	'hbs!apps/private/apps/open_menus/show/views/templates/menus'
], function (Marionette, MenuView, template) {
	return Marionette.CompositeView.extend({
		childView: MenuView,
		childViewContainer: 'tbody',
		className: 'table table-striped table-bordered',
		tagName: 'table',
		template: template
	});
});
