define([
	'app',
	'hbs!apps/private/apps/menus/list/templates/layout',
	'hbs!apps/private/apps/menus/list/templates/list',
	'hbs!apps/private/apps/menus/list/templates/list_item',
	'hbs!apps/private/apps/menus/list/templates/panel'
], function (App, layoutTmpl, listTmpl, listItemTmpl, panelTmpl) {

	App.module('PrivateApp.MenusApp.List.View', function (View, App, Backbone, Marionette, $, _) {

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
	            'click .js-new': 'menu:new'
			}
		});

		View.MenuItem = Marionette.ItemView.extend({
	        template: listItemTmpl,
	        tagName: 'tr',
	        triggers: {
	            'click td .js-show': 'menu:show',
	            'click td .js-edit': 'menu:edit',
	            'click td .js-delete': 'menu:delete'
	        }
	    });

        View.Menus = Marionette.CompositeView.extend({
	        template: listTmpl,
	        itemView: View.MenuItem,
	        tagName: 'table',
			className: 'table table-striped table-bordered',
	        itemViewContainer: 'tbody'
	    });

	});

    return App.PrivateApp.MenusApp.List.View;

});
