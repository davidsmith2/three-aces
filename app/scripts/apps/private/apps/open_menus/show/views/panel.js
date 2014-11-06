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
			if (this.options.headingCallback) {
				this.options.headingCallback(this.ui.heading, this.headingRegion);
			}
			if (this.options.bodyCallback) {
				this.options.bodyCallback(this.ui.body, this.bodyRegion);
			}
		}
	});
});
