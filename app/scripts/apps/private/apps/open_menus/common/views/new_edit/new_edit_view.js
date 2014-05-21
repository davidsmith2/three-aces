define([
    'app',
    'common/views/form',
    'hbs!apps/private/apps/open_menus/common/views/new_edit/templates/breadcrumbs',
    'hbs!apps/private/apps/open_menus/common/views/new_edit/templates/tabs',
    'hbs!apps/private/apps/open_menus/common/views/new_edit/templates/layout'
], function (App, FormView, breadcrumbsTmpl, tabsTmpl, layoutTmpl) {

    App.module('PrivateApp.OpenMenusApp.Common.Views.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        NewEdit.Breadcrumbs = Marionette.ItemView.extend({
			template: breadcrumbsTmpl,
			triggers: {
				'click a[href=#open-menus]': 'showOpenMenus'
			}
		});

        NewEdit.Tabs = Marionette.Layout.extend({
			template: tabsTmpl,
			regions: {
				restaurantRegion: '#restaurant-region',
				environmentRegion: '#environment-region',
				menusRegion: '#menus-region'
			},
			triggers: {
				'click .nav-tabs a[href=#menus-region]': 'showMenus'
			},
			events: {
				'click .nav-tabs a': 'show'
			},
			show: function (e) {
				e.preventDefault();
				$(e.target).tab('show');
			}
		});

		NewEdit.Layout = Marionette.Layout.extend({
			template: layoutTmpl,
			regions: {
				topRegion: '.top-region',
				bottomRegion: '.bottom-region'
			}
		});

        NewEdit.Form = FormView.extend({});

	});

    return App.PrivateApp.OpenMenusApp.Common.Views.NewEdit;

});