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
		}
	});

	var createPanel = function (options) {
		return new PanelView(options);
	};

	var API = {
		show: function (options) {
			var panelView = createPanel(options);
			options.region.show(panelView);
			panelView.headingRegion.show(options.headingView);
			panelView.bodyRegion.show(options.bodyView);
			if (options.callback) {
				options.callback(panelView);
			}
		}
	};
	App.commands.setHandler('panel:show', API.show);
});
