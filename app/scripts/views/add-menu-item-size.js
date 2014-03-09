define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/add-menu-item-size'
], function ($, _, Backbone, template) {
    'use strict';

    var AddMenuItemSizeView = Backbone.Marionette.ItemView.extend({
        className: 'row',
        template: template,
        events: {
            'click .addMenuItemSize': 'add',
            'click .deleteMenuItemSize': 'delete'
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$('.deleteMenuItemSize').hide();
            return this;
        },
        add: function (e) {
            e.preventDefault();
            this.model.set({
                size: 'small',
                price: 9.99
            });
            this.collection.add(this.model);
            this.$('.addMenuItemSize').hide();
            this.$('.deleteMenuItemSize').show();
            this.trigger('add', this.collection);
        },
        delete: function (e) {
            e.preventDefault();
            this.collection.remove(this.model);
            this.trigger('delete', this.collection);
            this.remove();
        }
    });

    return AddMenuItemSizeView;

});