define([
	'backbone.marionette',
	'jquery',
	'app',
	'hbs!apps/private/common/views/panel/templates/panel'
], function (Marionette, $, App, template) {
	var PanelView = Marionette.LayoutView.extend({
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
	var API = {
		showPanel: function (options) {
			var panelView = new PanelView(options);
			options.region.show(panelView);
		}
	};
	App.commands.setHandler('panel:show', API.showPanel);
});
