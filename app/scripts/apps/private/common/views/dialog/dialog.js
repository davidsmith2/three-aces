define([
	'backbone.marionette',
	'jquery',
	'app',
	'hbs!apps/private/common/views/dialog/templates/dialog',
	'bootstrap'
], function (Marionette, $, App, template) {
	var DialogView = Marionette.LayoutView.extend({
		className: 'modal',
		template: template,
		ui: {
			title: '.modal-title'
		},
		regions: {
			headerRegion: '.modal-header',
			titleRegion: '.modal-title',
			bodyRegion: '.modal-body',
			footerRegion: '.modal-footer'
		},
		events: {
			'click .close': 'onClickClose'
		},
		onShow: function () {
			this.$el.modal('show');
			$('.modal-backdrop').css({'z-index': 0});
		},
		onClickClose: function (e) {
			e.preventDefault();
			this.dismiss();
		},
		dismiss: function () {
			this.stopListening();
			this.$el.modal('hide');
			$('.modal-backdrop').remove();
		}
	});
	var API = {
		showDialog: function (options) {
			var dialogView = new DialogView(options);
			options.region.show(dialogView);
			dialogView.headerRegion.show(options.headerView);
			dialogView.bodyRegion.show(options.bodyView);
			dialogView.footerRegion.show(options.footerView);
			if (options.callback) {
				options.callback(dialogView);
			}
		}
	};
	App.commands.setHandler('dialog:show', API.showDialog);
});
