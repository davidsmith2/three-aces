define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/threeaces.datamanager',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail',
    'views/composite/menusList',
    'views/item/addEnvironment',
    'views/item/addRestaurant',
    'views/item/addMenu'
], function (Backbone, Marionette, $, _, DataManager, privateAppVent, OpenMenuDetailTmpl, MenusListView, AddEnvironmentView, AddRestaurantView, AddMenuView) {
    'use strict';
	var OpenMenuDetailView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        initialize: function () {
            var menus = this.model.get('menus');
            menus.fetch();
            menus.once('sync', this.showMenus, this);

            this.addRestaurantView = new AddRestaurantView({
                model: this.model.get('restaurantInfo')
            });
            this.addEnvironmentView = new AddEnvironmentView({
                model: this.model.get('environment')
            });

            privateAppVent.on('menu:add', this.onMenuAdd, this);
            privateAppVent.on('menu:edit', this.onMenuEdit, this);
            privateAppVent.on('menu:delete', this.onMenuDelete, this);
        },
        onRender: function () {
            this.$('#restaurantInfo').append(this.addRestaurantView.render().el);
            this.$('#environment').append(this.addEnvironmentView.render().el);
        },
        onMenuAdd: function (options) {
            var self = this;
            this.model.get('menus').create(options.model, {
                success: function (menu) {
                    self.onMenuEdit({
                        model: menu
                    });
                }
            });
        },
        onMenuEdit: function (options) {
            this.addMenuView = new AddMenuView({
                model: options.model
            });
            privateAppVent.trigger('ui:menu:edit', this.addMenuView);
        },
        onMenuDelete: function (options) {
            options.model.destroy();
        },
        showMenus: function (menus) {
            this.menusListView = new MenusListView({
                collection: menus
            });
            this.$('#menus').append(this.menusListView.render().el);
        }
    });
    return OpenMenuDetailView;
});
