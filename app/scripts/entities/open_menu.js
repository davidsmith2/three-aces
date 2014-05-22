define([
	'app',
    'entities/restaurant',
    'entities/environment',
    'entities/menu',
    'backbone-relational',
    'backbone-forms'
], function (App, Restaurant, Environment, Menu) {

	App.module('Entities.OpenMenu', function (OpenMenu, App, Backbone, Marionette, $, _) {

		OpenMenu.Model = Backbone.RelationalModel.extend({
	        urlRoot: '/openmenus',
	        idAttribute: '_id',
	        relations: [
	            {
	                type: Backbone.HasOne,
	                key: 'restaurantInfo',
	                relatedModel: Restaurant.Model,
	                reverseRelation: {
	                    type: Backbone.HasOne,
	                    key: 'openMenu',
	                    includeInJSON: '_id'
	                }
	            },
	            {
	                type: Backbone.HasOne,
	                key: 'environment',
	                relatedModel: Environment.Model,
	                reverseRelation: {
	                    type: Backbone.HasOne,
	                    key: 'openMenu',
	                    includeInJSON: '_id'
	                }
	            },
	            {
	                type: Backbone.HasMany,
	                key: 'menus',
	                relatedModel: Menu.Model,
	                collectionType: Menu.Collection,
	                reverseRelation: {
	                    key: 'openMenu',
	                    includeInJSON: '_id'
	                }
	            }
	        ],
	        defaults: {
	            omfUuid: '',
	            omfUpdatedTimestamp: '',
	            restaurantInfo: {},
	            environment: {},
	            menus: []
	        }
		});

		OpenMenu.Collection = Backbone.Collection.extend({
	        model: OpenMenu.Model,
	        url: '/openmenus'
		});

		var API = {
			getOpenMenuEntities: function () {
				var openMenus = new OpenMenu.Collection();
				var defer = $.Deferred();
				openMenus.fetch({
					success: function (data) {
						defer.resolve(data);
					}
				});
				var promise = defer.promise();
				return promise;
			},
			getOpenMenuEntity: function (openMenuId) {
				var openMenu = new OpenMenu.Model({
					_id: openMenuId
				});
				var defer = $.Deferred();
				setTimeout(function () {
					openMenu.fetch({
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

		App.reqres.setHandler('openMenu:entities', function () {
			return API.getOpenMenuEntities();
		});

		App.reqres.setHandler('openMenu:entity', function (id) {
			return API.getOpenMenuEntity(id);
		});

		App.reqres.setHandler('openMenu:entity:new', function () {
			return new OpenMenu.Model();
		});

	});

	return App.Entities.OpenMenu;

});