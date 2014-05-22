define([
    'app',
    'entities/menu_item',
    'backbone-relational',
    'backbone-forms'
], function (App, MenuItem) {

    App.module('Entities.MenuGroup', function (MenuGroup, App, Backbone, Marionette, $, _) {

        MenuGroup.Model = Backbone.RelationalModel.extend({
            idAttribute: '_id',
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'menuItems',
                    relatedModel: MenuItem.Model,
                    collectionType: MenuItem.Collection,
                    reverseRelation: {
                        key: 'menuGroup',
                        includeInJSON: '_id'
                    }
                }
            ],
            defaults: {
                groupName: '',
                groupUid: '',
                menuItems: []
            },
            schema: {
                groupName: {
                    type: 'Text',
                    title: 'Name'
                }
            }
        });

        MenuGroup.Collection = Backbone.Collection.extend({
            model: MenuGroup.Model,
            url: function () {
                return '/openmenus/' + this.menu.get('openMenu').get('_id') + '/menus/' + this.menu.get('_id') + '/menugroups';
            }
        });

        var API = {
            getMenuGroupEntities: function (menu) {
                var menuGroups = menu.get('menuGroups');
                var defer = $.Deferred();
                menuGroups.fetch({
                    success: function (data) {
                        defer.resolve(data);
                    }
                });
                var promise = defer.promise();
                return promise;
            },
            getMenuGroupEntity: function (menuGroupId) {
                var menuGroup = new MenuGroup.Model({
                    _id: menuGroupId
                });
                var defer = $.Deferred();
                setTimeout(function () {
                    menuGroup.fetch({
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

        App.reqres.setHandler('menuGroup:entities', function (menu) {
            return API.getMenuGroupEntities(menu);
        });

        App.reqres.setHandler('menuGroup:entity', function (id) {
            return API.getMenuGroupEntity(id);
        });

        App.reqres.setHandler('menu:entity:new', function () {
            return new MenuGroup.Model();
        });

    });

    return App.Entities.MenuGroup;

});