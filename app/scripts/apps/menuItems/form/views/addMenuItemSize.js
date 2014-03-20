define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/addMenuItemSize'
], function (Marionette, $, template) {
    'use strict';
    var AddMenuItemSize = Marionette.ItemView.extend({
        className: 'control-group row size',
        template: template,
        onRender: function () {
            this.$('.deleteMenuItemSize').hide();
        },
        events: {
            'click .addMenuItemSize': 'add',
            'click .deleteMenuItemSize': 'delete'
        },
        add: function (e) {
            var formData = {};
            e.preventDefault();
            this.$('.addMenuItemSize').hide();
            this.$('.deleteMenuItemSize').show();
            formData.size = this.$('input[name=sizeName]').val();
            formData.price = parseInt(this.$('input[name=sizePrice]').val(), 2);
            this.model.set(formData);
            this.trigger('addSize');
        },
        delete: function (e) {
            e.preventDefault();
            this.remove();
            this.trigger('deleteSize', this.model);
        }
    });
    return AddMenuItemSize;
});