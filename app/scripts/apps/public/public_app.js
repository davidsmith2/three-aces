define([
	'app'
], function (App) {

	App.module('PublicApp', function (PublicApp, App, Backbone, Marionette, $) {

		PublicApp.startWithParent = false;

		PublicApp.on('start', function () {
			require([
                'entities/open_menu'
			], function () {
				var gettingOpenMenus = App.reqres.request('openMenu:entities');
				$.when(gettingOpenMenus).done(function (openMenus) {
					console.log(openMenus)
				});
			});
		});

		PublicApp.on('stop', function () {
			console.log('the public app is stopping');
		});

	});

	return App.PublicApp;
});
