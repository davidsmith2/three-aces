define([
    'app',
    'backbone-relational'
], function (App) {
    App.module('Entities.MenuItemSize', function (MenuItemSize, App, Backbone, Marionette, $) {
        MenuItemSize.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            defaults: {
                menu_item_size_name: '',
                menu_item_size_price: 0
            }
        });
        MenuItemSize.Collection = Backbone.Collection.extend({
            model: MenuItemSize.Model,
            url: '/menuitemsizes'
        });
        var API = {
            getMenuItemSizeEntities: function () {
                var menuItemSizes = new MenuItemSize.Collection();
                var defer = $.Deferred();
                menuItemSizes.fetch({
                    success: function (collection) {
                        defer.resolve(collection);
                    }
                });
                var promise = defer.promise();
                return promise;
            },
            getMenuItemSizeEntity: function (id) {
                return MenuItemSize.Model.findOrCreate({_id: id});
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
