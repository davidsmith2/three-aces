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
            url: function () {
                var menuGroup = this.menu_group;
                var menu = menuGroup.get('menu');
                var openMenu = menu.get('open_menu');
                return '/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id') + '/menuitems';
            }
        });

        var API = {
            getMenuItemEntities: function (menuGroup) {
                var menuItems = menuGroup.get('menu_items');
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

        App.reqres.setHandler('menuItem:entities', function (menuGroup) {
            return API.getMenuItemEntities(menuGroup);
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