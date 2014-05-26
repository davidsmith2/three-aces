define([
	'app',
    'entities/menu_group',
    'backbone-relational',
    'backbone-forms'
], function (App, MenuGroup) {

	App.module('Entities.Menu', function (Menu, App, Backbone, Marionette, $, _) {

		Menu.Model = Backbone.RelationalModel.extend({
		    idAttribute: '_id',
		    relations: [
		        {
		            type: Backbone.HasMany,
		            key: 'menuGroups',
		            relatedModel: MenuGroup.Model,
		            collectionType: MenuGroup.Collection,
		            reverseRelation: {
		                key: 'menu',
		                includeInJSON: '_id'
		            }
		        }
		    ],
		    defaults: {
		        currencySymbol: '',
		        menuName: '',
		        menuGroups: []
		    },
		    schema: {
		        menuName: {
		            type: 'Text',
		            title: 'Name'
		        },
		        currencySymbol: {
		            type: 'Text',
		            title: 'Currency Symbol'
		        }
		    }
		});

	    Menu.Collection = Backbone.Collection.extend({
	        model: Menu.Model,
	        url: function () {
	        	var openMenu = this.openMenu;
	            return '/openmenus/' + openMenu.get('_id') + '/menus';
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
				var menu = new Menu.Model({
					_id: menuId
				});
				var defer = $.Deferred();
				setTimeout(function () {
					menu.fetch({
						success: function (data) {
							defer.resolve(data);
						},
						error: function () {
							defer.resolve(undefined);
						}
					});
				}, 2000);
				var promise = defer.promise();
				return promise;
			}
		};

		App.reqres.setHandler('menu:entities', function (openMenu) {
			return API.getMenuEntities(openMenu);
		});

		App.reqres.setHandler('menu:entity', function (id) {
			return API.getMenuEntity(id);
		});

		App.reqres.setHandler('menu:entity:new', function () {
			return new Menu.Model();
		});

	});

	return App.Entities.Menu;

});