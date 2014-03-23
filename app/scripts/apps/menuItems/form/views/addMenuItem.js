define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/addMenuItem',
    'apps/menuItems/form/views/addMenuItemSizes',
    'bootstrap'
], function (_, Backbone, Marionette, $, template, AddMenuItemSizes) {
    'use strict';
    var AddMenuItem = Marionette.ItemView.extend({
        template: template,
        onRender: function () {
            var sizes = new Backbone.Collection();
            var sizesView = new AddMenuItemSizes({
                collection: sizes
            });
            this.$(this.options.modalId).modal('show');
            this.$('#sizes').append(sizesView.render().el);
            this.on('save', sizesView.save, sizesView);
        },
        events: {
            'click .close': 'dismiss',
            'click input[name=sizeType]': 'toggleSizes',
            'submit form': 'save',
            'reset form': 'dismiss'
        },
        toggleSizes: function (e) {
            if ($(e.target).val() === 'singleSize') {
                this.showSingleSize();
            } else {
                this.showMultiSizes();
            }
        },
        showSingleSize: function () {
            this.$('#sizes').hide();
            this.$('#price').show();
        },
        showMultiSizes: function () {
            this.$('#price').hide();
            this.$('#sizes').show();
        },
        save: function (e) {
            var formData = {},
                self = this;
            e.preventDefault();
            $(e.target).find('[name]').each(function (i, el) {
                var name = el.name,
                    val = $(el).val();
                if (self.model.has(name) && val !== '') {
                    formData[name] = val;
                }
                $(el).val('');
            });
            this.options.collections.menuItems.create(formData, {
                success: function (menuItem) {
                    self.trigger('save', menuItem, self.options.collections.menuItemSizes);
                }
            });
            this.dismiss(e);
        },
        dismiss: function (e) {
            var modalId = $(e.target).closest('.modal').attr('id');
            $('#' + modalId).modal('hide');
            this.showSingleSize();
            this.trigger('dismiss');
        }
    });
    return AddMenuItem;
});