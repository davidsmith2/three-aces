define([
    'app',
    'common/views/form',
    'hbs!apps/private/apps/open_menus/common/views/new_edit/templates/layout'
], function (App, FormView, layoutTmpl) {

    App.module('PrivateApp.OpenMenusApp.Common.Views.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        NewEdit.Layout = Marionette.Layout.extend({
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

        NewEdit.Form = FormView.extend({});

	});

    return App.PrivateApp.OpenMenusApp.Common.Views.NewEdit;

});