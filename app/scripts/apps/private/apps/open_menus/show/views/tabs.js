define([
	'backbone.marionette',
	'jquery',
    'hbs!apps/private/apps/open_menus/show/views/templates/tabs',
    'bootstrap'
],
function (Marionette, $, template) {
	return Marionette.LayoutView.extend({
		template: template,
		regions: {
			menusRegion: '#menus-region',
			menuGroupsRegion: '#menu-groups-region',
			menuItemsRegion: '#menu-items-region'
		},
		events: {
			'click .nav-tabs a': 'show'
		},
		show: function (e) {
			e.preventDefault();
			$(e.target).tab('show');
		}
	});
});
