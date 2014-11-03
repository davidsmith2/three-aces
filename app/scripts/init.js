require.config({
	baseUrl: '/scripts',
	deps: ['backbone.marionette', 'bootstrap', 'main'],
	shim: {
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'backbone.marionette': {
			deps: [
				'backbone'
			],
			exports: 'Marionette'
		},
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		}
	},
	paths: {
		backbone: 'lib/vendor/backbone/backbone',
		'backbone-forms': 'lib/vendor/backbone-forms/backbone-forms',
		'backbone-forms-bootstrap3': 'lib/vendor/backbone-forms/bootstrap3',
		'backbone.marionette': 'lib/vendor/backbone.marionette/backbone.marionette',
		'backbone-relational': 'lib/vendor/backbone-relational/backbone-relational',
		'backbone-super': 'lib/vendor/backbone-super/backbone-super/backbone-super',
		bootstrap: 'lib/vendor/bootstrap/bootstrap',
		chai: 'lib/vendor/chai/chai',
		handlebars: 'lib/custom/require-handlebars-plugin/hbs/handlebars',
		hbs: 'lib/custom/require-handlebars-plugin/hbs',
		i18nprecompile: 'lib/custom/require-handlebars-plugin/hbs/i18nprecompile',
		jquery: 'lib/vendor/jquery/jquery',
		json2: 'lib/custom/require-handlebars-plugin/hbs/json2',
		mocha: 'lib/vendor/mocha/mocha',
		underscore: 'lib/custom/require-handlebars-plugin/hbs/underscore'
	},
	hbs: {
		disableI18n: true
	}
});
