define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
	'hbs!tmpl/item/restaurant'
], function (Backbone, Marionette, $, _, privateAppVent, RestaurantTmpl) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
        template: RestaurantTmpl,
        tagName: 'tr',
        ui: {},
        events: {
            'click .edit': 'editRestaurant',
            'click .delete': 'deleteRestaurant'
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        onRender: function() {},
        editRestaurant: function (e) {
            e.preventDefault();
            privateAppVent.trigger('restaurant:edit', {
                model: this.model,
                dialogId: $(e.target).attr('href')
            });
        },
        deleteRestaurant: function (e) {
            e.preventDefault();
            privateAppVent.trigger('restaurant:delete', {
                model: this.model
            });
        }
    });
});
