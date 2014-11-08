define([
	'backbone.marionette',
	'app',
	'hbs!apps/private/common/views/dialog/templates/dialog-footer'
], function (Marionette, App, Template) {
	var DialogFooterView = Marionette.ItemView.extend({
		template: Template,
		triggers: {
			'click .js-save': 'save',
			'click .js-save-close': 'saveClose',
			'click .js-cancel': 'cancel'
		},
		initialize: function (options) {
			if (options.buttons) {
				this.model.set('buttons', options.buttons);
			}
		}
	});
	var API = {
		create: function (options) {
			return new DialogFooterView(options);
		}
	};
	App.reqres.setHandler('dialog:footer:create', API.create);
});
