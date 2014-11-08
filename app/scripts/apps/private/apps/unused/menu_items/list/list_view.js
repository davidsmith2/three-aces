define([
	'app',
	'hbs!apps/private/apps/menu_items/list/templates/layout',
	'hbs!apps/private/apps/menu_items/list/templates/list',
	'hbs!apps/private/apps/menu_items/list/templates/list_item',
	'hbs!apps/private/apps/menu_items/list/templates/panel'
], function (App, layoutTmpl, listTmpl, listItemTmpl, panelTmpl) {

	App.module('PrivateApp.MenuItemsApp.List.View', function (View, App, Backbone, Marionette, $, _) {

        View.Layout = Marionette.Layout.extend({
	        template: layoutTmpl,
	        regions: {
	            panelRegion: '.panel-region',
	            listRegion: '.list-region'
	        }
	    });

		View.Panel = Marionette.ItemView.extend({
			template: panelTmpl,
			triggers: {
	            'click .js-new': 'menuItem:new'
			}
		});

		View.MenuItemItem = Marionette.ItemView.extend({
	        template: listItemTmpl,
	        tagName: 'tr',
	        triggers: {
	            'click td .js-show': 'menuItem:show',
	            'click td .js-edit': 'menuItem:edit',
	            'click td .js-delete': 'menuItem:delete'
	        }
	    });

        View.MenuItems = Marionette.CompositeView.extend({
	        template: listTmpl,
	        itemView: View.MenuItemItem,
	        tagName: 'table',
			className: 'table table-striped table-bordered',
	        itemViewContainer: 'tbody'
	    });

	});

    return App.PrivateApp.MenuItemsApp.List.View;

});
