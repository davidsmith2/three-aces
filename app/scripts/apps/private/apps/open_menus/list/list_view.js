define([
    'app',
    'hbs!apps/private/apps/open_menus/list/templates/layout',
    'hbs!apps/private/apps/open_menus/list/templates/list',
    'hbs!apps/private/apps/open_menus/list/templates/list_item',
    'hbs!apps/private/apps/open_menus/list/templates/panel'
], function (App, layoutTmpl, listTmpl, listItemTmpl, panelTmpl) {

    App.module('PrivateApp.OpenMenusApp.List.View', function (View, App, Backbone, Marionette, $, _) {

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
	            'click .js-new': 'openMenu:new'
	        }
	    });

        View.OpenMenu = Marionette.ItemView.extend({
	        template: listItemTmpl,
	        tagName: 'tr',
	        triggers: {
	            'click td .js-show': 'openMenu:show',
	            'click td .js-edit': 'openMenu:edit',
	            'click td .js-delete': 'openMenu:delete'
	        }
	    });

        View.OpenMenus = Marionette.CompositeView.extend({
			className: 'table table-striped table-bordered',
	        itemView: View.OpenMenu,
	        itemViewContainer: 'tbody',
	        tagName: 'table',
	        template: listTmpl
	    });

    });

    return App.PrivateApp.OpenMenusApp.List.View;

});