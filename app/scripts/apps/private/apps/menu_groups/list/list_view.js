define([
	'app',
	'hbs!apps/private/apps/menu_groups/list/templates/layout',
	'hbs!apps/private/apps/menu_groups/list/templates/list',
	'hbs!apps/private/apps/menu_groups/list/templates/list_item',
	'hbs!apps/private/apps/menu_groups/list/templates/panel'
], function (App, layoutTmpl, listTmpl, listItemTmpl, panelTmpl) {

	App.module('PrivateApp.MenuGroupsApp.List.View', function (View, App, Backbone, Marionette, $, _) {

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
	            'click .js-new': 'menuGroup:new'
			}
		});

		View.MenuGroupItem = Marionette.ItemView.extend({
	        template: listItemTmpl,
	        tagName: 'tr',
	        triggers: {
	            'click td .js-show': 'menuGroup:show',
	            'click td .js-edit': 'menuGroup:edit',
	            'click td .js-delete': 'menuGroup:delete'
	        }
	    });

        View.MenuGroups = Marionette.CompositeView.extend({
	        template: listTmpl,
	        itemView: View.MenuGroupItem,
	        tagName: 'table',
			className: 'table table-striped table-bordered',
	        itemViewContainer: 'tbody'
	    });

	});

    return App.PrivateApp.MenuGroupsApp.List.View;

});
