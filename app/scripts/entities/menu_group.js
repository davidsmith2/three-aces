define([
    'app',
    'entities/menu_item',
    'backbone-relational'
], function (App, MenuItem) {

    App.module('Entities.MenuGroup', function (MenuGroup, App, Backbone, Marionette, $, _) {

        MenuGroup.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'menu_items',
                    relatedModel: MenuItem.Model,
                    collectionType: MenuItem.Collection,
                    reverseRelation: {
                        key: 'menu_group',
                        includeInJSON: '_id'
                    }
                }
            ],
            defaults: {
                group_name: '',
                group_uid: '',
                menu_items: []
            },
            schema: {
                group_name: {
                    type: 'Text',
                    title: 'Group name'
                }
            }
        });

        MenuGroup.Collection = Backbone.Collection.extend({
            model: MenuGroup.Model,
            url: '/menugroups'
        });

        var API = {
            getMenuGroupEntities: function () {
                var menuGroups = new MenuGroup.Collection();
                var defer = $.Deferred();
                menuGroups.fetch({
                    success: function (collection) {
                        defer.resolve(collection);
                    }
                });
                var promise = defer.promise();
                return promise;
            },
            getMenuGroupEntity: function (id) {
                return MenuGroup.Model.findOrCreate({_id: id});
            }
        };

        App.reqres.setHandler('menuGroup:entities', function () {
            return API.getMenuGroupEntities();
        });

        App.reqres.setHandler('menuGroup:entity', function (id) {
            return API.getMenuGroupEntity(id);
        });

        App.reqres.setHandler('menuGroup:entity:new', function () {
            return new MenuGroup.Model();
        });

    });

    return App.Entities.MenuGroup;

});
