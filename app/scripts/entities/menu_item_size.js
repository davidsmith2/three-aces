define([
    'app',
    'backbone-relational',
    'backbone-forms'
], function (App) {

    App.module('Entities.MenuItemSize', function (MenuItemSize, App, Backbone, Marionette, $, _) {

        MenuItemSize.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            defaults: {
                menuItemSizeName: '',
                menuItemSizePrice: 0
            }
        });

        MenuItemSize.Collection = Backbone.Collection.extend({
            model: MenuItemSize.Model,
            url: function () {
                //return '/openmenus/' + this.menu.get('openMenu').get('_id') + '/menus/' + this.menu.get('_id') + '/menuitems';
            }
        });

        var API = {
            getMenuItemSizeEntities: function (menuItem) {
                var menuItemSizes = menuItem.get('menuItemSizes');
                var defer = $.Deferred();
                menuItemSizes.fetch({
                    success: function (data) {
                        defer.resolve(data);
                    }
                });
                var promise = defer.promise();
                return promise;
            },
            getMenuItemSizeEntity: function (menuItemSizeId) {
                var menuItemSize = new MenuItemSize.Model({
                    _id: menuItemSizeId
                });
                var defer = $.Deferred();
                setTimeout(function () {
                    menuItemSize.fetch({
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

        App.reqres.setHandler('menuItemSize:entities', function () {
            return API.getMenuItemSizeEntities();
        });

        App.reqres.setHandler('menuItemSize:entity', function (id) {
            return API.getMenuItemSizeEntity(id);
        });

        App.reqres.setHandler('menuItemSize:entity:new', function () {
            return new MenuItemSize.Model();
        });

    });

    return App.Entities.MenuItemSize;

});