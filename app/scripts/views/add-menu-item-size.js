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
        initialize: function (options) {
            this.sizesArr = options.sizesArr;
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
            this.sizesArr.push(formData);
            this.$('.addMenuItemSize').hide();
            this.$('.deleteMenuItemSize').show();
            this.trigger('add', this.sizesArr);
        },
        delete: function (e) {
            var index = $(e.target).closest('.row').index();
            e.preventDefault();
            this.sizesArr.splice(index, 1);
            this.trigger('delete', this.sizesArr);
            this.remove();
        }
    });

    return AddMenuItemSizeView;

});