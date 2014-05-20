define([
    'app',
    'common/views/form',
    'hbs!apps/private/apps/open_menus/new/templates/layout'
], function (App, FormView, layoutTmpl) {

    App.module('PrivateApp.OpenMenusApp.New.View', function (View, App, Backbone, Marionette, $, _) {

        View.Layout = Marionette.Layout.extend({
			template: layoutTmpl,
			regions: {
				restaurantRegion: '#restaurant-region',
				environmentRegion: '#environment-region',
				menusRegion: '#menus-region'
			},
			triggers: {
				'click .nav-tabs a[href=#menus-region]': 'showMenusTabPane'
			},
			events: {
				'click .nav-tabs a': 'showTabPane'
			},
			showTabPane: function (e) {
				e.preventDefault();
				$(e.target).tab('show');
			}
		});

        View.Form = FormView.extend({});

	});

    return App.PrivateApp.OpenMenusApp.New.View;

});