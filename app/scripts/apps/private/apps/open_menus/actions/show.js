define([
	'jquery',
	'app',
    'apps/private/apps/open_menu/app'
],
function ($, App, OpenMenuApp) {
	return function (id) {
		$.when(App.request('openMenu:entity', id)).done(function (openMenu) {
            OpenMenuApp.start(openMenu);
		});
	};
});
