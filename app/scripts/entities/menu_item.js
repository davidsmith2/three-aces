define([
    'app',
    'entities/menu_item_size',
    'backbone-relational',
    'backbone-forms'
], function (App, MenuItemSize) {

    App.module('Entities.MenuItem', function (MenuItem, App, Backbone, Marionette, $, _) {

        MenuItem.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'menuItemSizes',
                    relatedModel: MenuItemSize.Model,
                    collectionType: MenuItemSize.Collection,
                    reverseRelation: {
                        key: 'menuItem',
                        includeInJSON: '_id'
                    }
                }
            ],
            defaults: {
                menuItemName: '',
                menuItemDescription: '',
                menuItemPrice: 0,
                menuItemSizes: []
            },
            schema: {
                menuItemName: {
                    type: 'Text',
                    title: 'Name'
                },
                menuItemDescription: {
                    type: 'TextArea',
                    title: 'Description'
                },
                menuItemPrice: {
                    type: 'Text',
                    title: 'Price'
                }
            }
        });

        MenuItem.Collection = Backbone.Collection.extend({
            model: MenuItem.Model,
            url: function () {
                return '/openmenus/' + this.menu.get('openMenu').get('_id') + '/menus/' + this.menu.get('_id') + '/menuitems';
            },
            forCategory: function (category) {
                var filteredItems, x;
                if (!category) {
                    return this;
                }
                filteredItems = this.filter(function (item) {
                    var category, found;
                    category = item.get('menuItemCategory');
                    found = category.indexOf(category) >= 0;
                    return found;
                });

                x = new MenuItemCollection(filteredItems);
                return x;
            }
        });

        var API = {
            getMenuItemEntities: function (menu) {
                var menuItems = menu.get('menuItems');
                var defer = $.Deferred();
                menuItems.fetch({
                    success: function (data) {
                        defer.resolve(data);
                    }
                });
                var promise = defer.promise();
                return promise;
            },
            getMenuItemEntity: function (menuItemId) {
                var menuItem = new MenuItem.Model({
                    _id: menuItemId
                });
                var defer = $.Deferred();
                setTimeout(function () {
                    menuItem.fetch({
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