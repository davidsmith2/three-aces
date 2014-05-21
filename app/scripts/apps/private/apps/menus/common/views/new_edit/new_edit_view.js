define([
    'app',
    'common/views/form',
    'hbs!apps/private/apps/menus/common/views/new_edit/templates/layout'
], function (App, FormView, layoutTmpl) {

    App.module('PrivateApp.MenusApp.Common.Views.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        NewEdit.Layout = Marionette.Layout.extend({
			template: layoutTmpl,
			regions: {
				menuInfoRegion: '#menu-info-region',
				menuGroupsRegion: '#menu-groups-region',
				menuItemsRegion: '#menu-items-region'
			},
			triggers: {
				'click .nav-tabs a[href=#menu-groups-region]': 'showMenuGroupsTabPane',
				'click .nav-tabs a[href=#menu-items-region]': 'showMenuItemsTabPane'
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

    return App.PrivateApp.MenusApp.Common.Views.NewEdit;

});