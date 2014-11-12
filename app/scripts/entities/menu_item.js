define([
    'app',
    'entities/menu_item_size',
    'backbone-relational'
], function (App, MenuItemSize) {

    App.module('Entities.MenuItem', function (MenuItem, App, Backbone, Marionette, $) {

        MenuItem.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'menu_item_sizes',
                    relatedModel: MenuItemSize.Model,
                    collectionType: MenuItemSize.Collection,
                    reverseRelation: {
                        key: 'menu_item',
                        includeInJSON: '_id'
                    }
                }
            ],
            defaults: {
                menu_item_name: '',
                menu_item_description: '',
                menu_item_price: 0,
                menu_item_sizes: []
            },
            schema: {
                menu_item_name: {
                    type: 'Text',
                    title: 'Menu item name'
                },
                menu_item_description: {
                    type: 'Text',
                    title: 'Menu item description'
                },
                menu_item_price: {
                    type: 'Text',
                    title: 'Menu item price'
                }
            }
        });

        MenuItem.Collection = Backbone.Collection.extend({
            model: MenuItem.Model,
            url: '/menuitems'
        });

        var API = {
            getMenuItemEntities: function () {
                var menuItems = new MenuItem.Collection();
                var defer = $.Deferred();
                menuItems.fetch({
                    success: function (collection) {
                        defer.resolve(collection);
                    }
                });
                var promise = defer.promise();
                return promise;
            },
            getMenuItemEntity: function (id) {
                return MenuItem.Model.findOrCreate({_id: id});
            }
        };

        App.reqres.setHandler('menuItem:entities', function () {
            return API.getMenuItemEntities();
        });

        App.reqres.setHandler('menuItem:entity', function (id) {
            return API.getMenuItemEntity(id);
        });

        App.reqres.setHandler('menuItem:entity:new', function () {
            return new MenuItem.Model();
        });

    });

    return App.Entities.MenuItem;

});
