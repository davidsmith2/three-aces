define([
	'backbone.marionette',
	'app',
	'hbs!apps/private/apps/open_menus/dialog/views/templates/footer'
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
				this.initButtons(options.buttons);
			}
		},
		initButtons: function (buttons) {
			for (var button in buttons) {
				this.model.set('buttons', buttons);
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
