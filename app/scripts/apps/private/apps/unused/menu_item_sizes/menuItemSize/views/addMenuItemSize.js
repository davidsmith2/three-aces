define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/views/addMenuItemSize',
    'helpers/vent'
], function (Marionette, $, template, privateAppVent) {
    'use strict';
    var AddMenuItemSizeView = Marionette.ItemView.extend({
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
            formData.menuItemSizeName = this.$('input[name=menuItemSizeName]').val();
            formData.menuItemSizePrice = this.$('input[name=menuItemSizePrice]').val();
            this.model.set(formData);
            this.trigger('menuItemSize:add', this.model);
        },
        delete: function (e) {
            e.preventDefault();
            this.remove();
            this.trigger('menuItemSize:delete', this.model);
        }
    });
    return AddMenuItemSizeView;
});