define([
	'backbone.marionette',
	'jquery',
    'hbs!apps/private/apps/open_menus/dialog/views/templates/tabs',
    'bootstrap'
],
function (Marionette, $, template) {
	return Marionette.LayoutView.extend({
		template: template,
		regions: {
			restaurantRegion: '#restaurant-region',
			environmentRegion: '#environment-region'
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
