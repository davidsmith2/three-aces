define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/add-menu-item-size'
], function ($, _, Backbone, template) {
    'use strict';

    var AddMenuItemSizeView = Backbone.Marionette.ItemView.extend({
        className: 'control-group row',
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
            var formData = {};
            e.preventDefault();
            formData.size = this.$('input[name=sizeName]').val();
            formData.price = parseFloat(this.$('input[name=sizePrice]').val(), 2);
            this.model.save(formData);
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