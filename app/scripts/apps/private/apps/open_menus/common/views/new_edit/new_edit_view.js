define([
    'app',
    'apps/private/common/views/buttons',
    'apps/private/common/views/dialog',
    'apps/private/common/views/form',
    'hbs!apps/private/apps/open_menus/common/views/new_edit/templates/breadcrumbs',
    'hbs!apps/private/apps/open_menus/common/views/new_edit/templates/tabs',
    'hbs!apps/private/apps/open_menus/common/views/new_edit/templates/layout'
], function (App, ButtonsView, DialogView, FormView, breadcrumbsTmpl, tabsTmpl, layoutTmpl) {

    App.module('PrivateApp.OpenMenusApp.Common.Views.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        NewEdit.Breadcrumbs = Marionette.ItemView.extend({
			template: breadcrumbsTmpl,
			triggers: {
				'click a[href=#open-menus]': 'showOpenMenus'
			}
		});

        NewEdit.Tabs = Marionette.LayoutView.extend({
			template: tabsTmpl,
			regions: {
				restaurantRegion: '#restaurant-region',
				environmentRegion: '#environment-region'
			},
			events: {
				'click .nav-tabs a': 'show'
			},
			show: function (e) {
				e.preventDefault();
				$(e.target).tab('show');
			}
		});

        NewEdit.Dialog = DialogView.extend({});

        NewEdit.Form = FormView.extend({});

        NewEdit.Buttons = ButtonsView.extend({});

	});

    return App.PrivateApp.OpenMenusApp.Common.Views.NewEdit;

});
