define([
	'jquery',
	'app'
],

function ($, App) {
	return function (id) {
		$.when(App.request('openMenu:entity', id)).done(function (openMenu) {
			openMenu.destroy();
		});
	};
});
