define([
	'backbone.marionette',
	'jquery',
	'hbs!apps/private/apps/open_menus/show/views/templates/panel'
], function (Marionette, $, template) {
	return Marionette.LayoutView.extend({
		template: template,
		ui: {
			heading: '.panel-heading',
			body: '.panel-body'
		},
		regions: {
			headingRegion: '.panel-heading',
			bodyRegion: '.panel-body'
		},
		initialize: function (options) {
			this.options = options;
		},
		onRender: function () {
			if (this.options.callback) {
				this.options.callback(this);
			}
		}
	});
});
