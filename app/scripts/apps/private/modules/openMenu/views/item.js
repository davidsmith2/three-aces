define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
	'hbs!tmpl/private/screens/openMenu/item',
    'apps/private/modules/restaurant/views/form',
    'apps/private/modules/environment/views/form',
    'apps/private/modules/menus/views/composite'
], function (Backbone, Marionette, $, _, vent, OpenMenuTmpl, RestaurantView, EnvironmentView, MenusView) {
    'use strict';
	var OpenMenuView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuTmpl,
        ui: {},
        models: {
            restaurant: {},
            environment: {}
        },
        collections: {
            menus: {}
        },
        views: {
            restaurant: {},
            environment: {},
            menus: {}
        },
        initialize: function () {
            this.models.restaurant = this.model.get('restaurantInfo');
            this.models.environment = this.model.get('environment');
            this.collections.menus = this.model.get('menus');
            this.views.restaurant = new RestaurantView({
                model: this.models.restaurant
            });
            this.views.environment = new EnvironmentView({
                model: this.models.environment
            });
        },
        onRender: function () {
            var self = this;
            this.$('#restaurant').append(this.views.restaurant.render().el);
            this.$('#environment').append(this.views.environment.render().el);
            this.collections.menus.fetch({
                success: function (menus) {
                    self.views.menus = new MenusView({
                        collection: menus
                    });
                    self.$('#menus').append(self.views.menus.render().el);
                }
            });
        }
    });
    return OpenMenuView;
});