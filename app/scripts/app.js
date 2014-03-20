define([
	'jquery',
	'backbone.marionette'
], function ($, Marionette) {
    'use strict';

    var prepareData = function () {
		require([
			'requestHandlers'
		], function (requestHandlers) {
			var requestHandler;
			for (var i = 0, len = requestHandlers.length; i < len; i++) {
				requestHandler = requestHandlers[i];
				App.reqres.setHandler(requestHandler.name, requestHandler.handler);
			}
			getData();
		});
    };

	var getData = function () {
        var menuItemSizes = App.request('menuItemSizes:entities');
        menuItemSizes.done(function (menuItemSizes) {
            var menuItems = App.request('menuItems:entities');
            menuItems.done(function (menuItems) {
				App.collections.menuItems = menuItems;
				App.collections.menuItemSizes = menuItemSizes;
				showData();
	        });
        });
	};

	var showData = function () {
		require([
			'modules/nav',
            'modules/form'
		], function (NavModule, FormModule) {
	        NavModule.API.start();
	        FormModule.API.start();
	        //ListModule.API.start();
		});
    };

	var App = new Marionette.Application();

	App.addRegions({
        navRegion: '#nav',
        mainRegion: '#main',
        offscreenRegion: '#offscreen'
    });

	App.collections = {};

	App.on('initialize:after', prepareData);

	return App;

});
