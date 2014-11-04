define([
	'app',
	'hbs!apps/private/apps/open_menus/list/templates/layout',
	'hbs!apps/private/apps/open_menus/list/templates/list',
	'hbs!apps/private/apps/open_menus/list/templates/list_item',
	'hbs!apps/private/apps/open_menus/list/templates/panel'
], function (App, layoutTmpl, listTmpl, listItemTmpl, panelTmpl) {

	App.module('PrivateApp.OpenMenusApp.List.View', function (View, App, Backbone, Marionette, $, _) {

		View.Layout = Marionette.LayoutView.extend({
			template: layoutTmpl,
			regions: {
				panelRegion: '.panel-region',
				listRegion: '.list-region'
			}
		});

		View.Panel = Marionette.ItemView.extend({
			template: panelTmpl,
			ui: {
				'new': '.js-new'
			},
			triggers: {
				'click @ui.new': 'openMenu:new'
			}
		});

		View.OpenMenu = Marionette.ItemView.extend({
			template: listItemTmpl,
			tagName: 'tr',
			ui: {
				'show': 	'.js-show',
				'edit': 	'.js-edit',
				'delete': 	'.js-delete'
			},
			triggers: {
				'click @ui.show': 	'openMenu:show',
				'click @ui.edit': 	'openMenu:edit',
				'click @ui.delete': 'openMenu:delete'
			}
		});

		View.OpenMenus = Marionette.CompositeView.extend({
			className: 'table table-striped table-bordered',
			childView: View.OpenMenu,
			childViewContainer: 'tbody',
			tagName: 'table',
			template: listTmpl,
			initialize: function () {
				console.log(this.collection)
			}
		});

	});

	return App.PrivateApp.OpenMenusApp.List.View;

});
