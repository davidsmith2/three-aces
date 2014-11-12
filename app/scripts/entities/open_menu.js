define([
	'app',
    'entities/restaurant',
    'entities/environment',
    'entities/menu',
    'backbone-relational'
], function (App, Restaurant, Environment, Menu) {
	App.module('Entities.OpenMenu', function (OpenMenu, App, Backbone, Marionette, $) {
		OpenMenu.Model = Backbone.RelationalModel.extend({
	        urlRoot: '/openmenus',
	        idAttribute: '_id',
	        relations: [
	            {
	                type: Backbone.HasOne,
	                key: 'restaurant_info',
	                relatedModel: Restaurant.Model,
	                reverseRelation: {
	                    type: Backbone.HasOne,
	                    key: 'open_menu',
	                    includeInJSON: '_id'
	                }
	            },
	            {
	                type: Backbone.HasOne,
	                key: 'environment',
	                relatedModel: Environment.Model,
	                reverseRelation: {
	                    type: Backbone.HasOne,
	                    key: 'open_menu',
	                    includeInJSON: '_id'
	                }
	            },
	            {
	                type: Backbone.HasMany,
	                key: 'menus',
	                relatedModel: Menu.Model,
	                collectionType: Menu.Collection,
	                autoFetch: true,
	                reverseRelation: {
	                    key: 'open_menu',
	                    includeInJSON: '_id'
	                }
	            }
	        ],
	        defaults: {
	            omf_uuid: '',
	            omf_updated_timestamp: '',
	            restaurant_info: {},
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
					success: function (collection) {
						defer.resolve(collection);
					}
				});
				var promise = defer.promise();
				return promise;
			},
			getOpenMenuEntity: function (id) {
				return OpenMenu.Model.findOrCreate({_id: id});
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
        App.reqres.setHandler('restaurant:entity', function (openMenuId) {
            var openMenu = API.getOpenMenuEntity(openMenuId);
            return openMenu.get('restaurant_info');
        });
        App.reqres.setHandler('environment:entity', function (openMenuId) {
            var openMenu = API.getOpenMenuEntity(openMenuId);
            return openMenu.get('environment');
        });
	});
	return App.Entities.OpenMenu;
});
