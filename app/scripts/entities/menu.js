define([
	'app',
    'entities/menu_group',
    'backbone-relational'
], function (App, MenuGroup) {
	App.module('Entities.Menu', function (Menu, App, Backbone, Marionette, $) {
		Menu.Model = Backbone.RelationalModel.extend({
		    idAttribute: '_id',
		    relations: [
		        {
		            type: Backbone.HasMany,
		            key: 'menu_groups',
		            relatedModel: MenuGroup.Model,
		            collectionType: MenuGroup.Collection,
		            reverseRelation: {
		                key: 'menu',
		                includeInJSON: '_id'
		            }
		        }
		    ],
		    defaults: {
		        currency_symbol: '$',
		        menu_name: '',
		        menu_groups: []
		    },
		    schema: {
		        menu_name: {
		            type: 'Text',
		            title: 'Menu name'
		        },
		        currency_symbol: {
		            type: 'Text',
		            title: 'Currency symbol'
		        }
		    }
		});
	    Menu.Collection = Backbone.Collection.extend({
	        model: Menu.Model,
            url: function () {
                var openMenuId = this.open_menu.get('_id');
                return '/openmenus/' + openMenuId + '/menus';
            }
	    });
		var API = {
			getMenuEntities: function (openMenu) {
                var menus = openMenu.get('menus');
				var defer = $.Deferred();
				menus.fetch({
					success: function (data) {
						defer.resolve(data);
					}
				});
				var promise = defer.promise();
				return promise;
			},
			getMenuEntity: function (menuId) {
				return Menu.Model.findOrCreate({_id: menuId});
			}
		};
		App.reqres.setHandler('menu:entities', function (openMenu) {
			return API.getMenuEntities(openMenu);
		});
		App.reqres.setHandler('menu:entity', function (menuId) {
			return API.getMenuEntity(menuId);
		});
		App.reqres.setHandler('menu:entity:new', function () {
			return new Menu.Model();
		});
	});
	return App.Entities.Menu;
});
