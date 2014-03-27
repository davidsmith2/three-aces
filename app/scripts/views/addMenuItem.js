define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/addMenuItem',
    'views/addMenuItemSizes',
    'bootstrap'
], function (_, Backbone, Marionette, $, template, AddMenuItemSizes) {
    'use strict';
    var AddMenuItemView = Marionette.ItemView.extend({
        template: template,
        onRender: function () {
            this.sizes = new Backbone.Collection();
            this.sizesView = new AddMenuItemSizes({
                collection: this.sizes
            });
            this.$(this.options.dialogId).modal('show');
            this.$('#sizes').append(this.sizesView.render().el);
        },
        events: {
            'click .close': 'dismiss',
            'click input[name=menuItemSizeType]': 'toggleSizes',
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
            var self = this;
            e.preventDefault();
            this.options.collections.menuItems.create(this.parseForm(e.target), {
                success: function (menuItem) {
                    if (self.sizes.length > 1) {
                        self.sizesView.save(menuItem, self.options.collections.menuItemSizes);
                    } else {
                        self.sizes.reset([]);
                    }
                }
            });
            this.dismiss(e);
        },
        parseForm: function (form) {
            var formData = {},
                self = this;
            $(form).find('[name]').each(function (i, el) {
                var name = el.name,
                    val = $(el).val();
                if (self.model.has(name) && val !== '') {
                    formData[name] = val;
                }
                $(el).val('');
            });
            return formData;
        },
        dismiss: function (e) {
            var dialogId = $(e.target).closest('.modal').attr('id');
            $('#' + dialogId).modal('hide');
            this.showSingleSize();
            this.trigger('dismiss');
        }
    });
    return AddMenuItemView;
});