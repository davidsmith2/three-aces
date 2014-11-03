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
		'backbone.babysitter': 'lib/vendor/backbone.babysitter/backbone.babysitter',
		'backbone-forms': 'lib/vendor/backbone-forms/backbone-forms',
		'backbone-forms-bootstrap3': 'lib/vendor/backbone-forms/bootstrap3',
		'backbone.marionette': 'lib/vendor/backbone.marionette/backbone.marionette',
		'backbone-relational': 'lib/vendor/backbone-relational/backbone-relational',
		'backbone-super': 'lib/vendor/backbone-super/backbone-super/backbone-super',
		'backbone.wreqr': 'lib/vendor/backbone.wreqr/backbone.wreqr',
		bootstrap: 'lib/vendor/bootstrap/bootstrap',
		chai: 'lib/vendor/chai/chai',
		handlebars: 'lib/vendor/require-handlebars-plugin/Handlebars',
		hbs: 'lib/vendor/require-handlebars-plugin/hbs',
		i18nprecompile: 'lib/vendor/require-handlebars-plugin/i18nprecompile',
		jquery: 'lib/vendor/jquery/jquery',
		json2: 'lib/vendor/require-handlebars-plugin/json2',
		mocha: 'lib/vendor/mocha/mocha',
		text: 'lib/vendor/requirejs-text/text',
		tmpl: '../templates',
		underscore: 'lib/vendor/underscore/underscore'
	},
	hbs: {
		disableI18n: true
	}
});
