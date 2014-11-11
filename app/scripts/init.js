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
        'backbone-forms-bootstrap3': {
            deps: [
                'backbone-forms',
                'bootstrap'
            ]
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
		},
		json2: {
			exports: 'JSON'
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
		handlebars: 'lib/vendor/handlebars/handlebars',
		hbs: 'lib/custom/require-handlebars-plugin/hbs',
		jquery: 'lib/vendor/jquery/jquery',
		json2: 'lib/vendor/json2/json2',
		mocha: 'lib/vendor/mocha/mocha',
		underscore: 'lib/vendor/underscore/underscore'
	},
	hbs: {
		disableI18n: true
	}
});
