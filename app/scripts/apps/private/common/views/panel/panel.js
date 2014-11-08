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
			if (this.options.callbacks && this.options.callbacks.onRender) {
				this.options.callbacks.onRender(this);
			}
		}
	});

	var createPanel = function (options) {
		return new PanelView(options);
	};

	var API = {
		show: function (options) {
			var panelView = createPanel(options);
			options.region.show(panelView);
		},
		show_1: function (options) {
			var panelView = createPanel(options);
			options.region.show(panelView);
			panelView.headingRegion.show(options.headingView);
			panelView.bodyRegion.show(options.bodyView);
		}
	};
	App.commands.setHandler('panel:show', API.show);
	App.commands.setHandler('panel:show:1', API.show_1);
});
