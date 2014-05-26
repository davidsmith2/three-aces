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
            url: function () {
                var menu = this.menu;
                var openMenu = menu.get('open_menu');
                return '/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups';
            }
        });

        var API = {
            getMenuGroupEntities: function (menu) {
                var menuGroups = menu.get('menu_groups');
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

        App.reqres.setHandler('menuGroup:entity:new', function () {
            return new MenuGroup.Model();
        });

    });

    return App.Entities.MenuGroup;

});