define([
	'jquery',
	'backbone.marionette'
], function ($, Marionette) {
    'use strict';

    var setData = function () {
		require([
			'requestManager',
			'requestHandlers'
		], function (RequestManager, requestHandlers) {
			var requestManager = new RequestManager();
			for (var key in requestHandlers) {
				requestManager.set(key, requestHandlers[key]);
			}
			getData(requestManager);
		});
    };

	var getData = function (requestManager) {
        var menuItemSizes = requestManager.get('menuItemSizes:entities');
        menuItemSizes.done(function (menuItemSizes) {
            var menuItems = requestManager.get('menuItems:entities');
            menuItems.done(function (menuItems) {
				showData(menuItems, menuItemSizes);
	        });
        });
	};

	var showData = function (menuItems, menuItemSizes) {
		require([
			'modules/nav',
			'modules/list',
            'modules/form'
		], function (NavModule, ListModule, FormModule) {
	        NavModule.API.start();
			ListModule.API.start(menuItems, menuItemSizes);
	        FormModule.API.start(menuItems, menuItemSizes);
		});
    };

	var App = new Marionette.Application();

	App.addRegions({
        navRegion: '#nav',
        mainRegion: '#main',
        offscreenRegion: '#offscreen'
    });

	App.collections = {};

	App.on('initialize:after', setData);

	return App;

});
