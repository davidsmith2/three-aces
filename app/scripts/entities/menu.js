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
                    type: 'Select',
                    options: ['$'],
                    title: 'Currency symbol'
                }
            }
        });
        Menu.Collection = Backbone.Collection.extend({
            model: Menu.Model,
            initialize: function (options) {
                if (options && options.url) {
                    this.url = options.url;
                }
            }
        });
        var API = {
            getMenuEntities: function (openMenuId) {
                var url, menus, defer;
                if (openMenuId) {
                    url = '/openmenus/' + openMenuId + '/menus';
                } else {
                    url = '/menus';
                }
                menus = new Menu.Collection({
                    url: url
                });
                defer = $.Deferred();
                menus.fetch({
                    success: function (collection) {
                        defer.resolve(collection);
                    }
                });
                return defer.promise();
            },
            getMenuEntity: function (id) {
                return Menu.Model.findOrCreate({_id: id});
            },
            getMenuEntityNew: function () {
                return new Menu.Model();
            }
        };
        App.reqres.setHandler('menu:entities', API.getMenuEntities);
        App.reqres.setHandler('menu:entity', API.getMenuEntity);
        App.reqres.setHandler('menu:entity:new', API.getMenuEntityNew);
    });
    return App.Entities.Menu;
});
