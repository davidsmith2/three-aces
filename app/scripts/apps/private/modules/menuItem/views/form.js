define([
    'underscore',
    'backbone',
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/views/addMenuItem',
    'views/addMenuItemSizes',
    'bootstrap'
], function (_, Backbone, Marionette, $, template, AddMenuItemSizes) {
    'use strict';
    var AddMenuItemView = Backbone.Marionette.ItemView.extend({
        template: template,
        initialize: function () {
            if (!this.model.get('menuItemSizes').length) {
                this.sizes = new Backbone.Collection();
            } else {
                this.sizes = this.model.get('menuItemSizes');
            }
            this.sizesView = new AddMenuItemSizes({
                collection: this.sizes
            });
        },
        onRender: function () {
            this.$(this.options.dialogId).modal('show');
            this.$('#sizes').append(this.sizesView.render().el);
        },
        events: {
            'click .close': 'dismissDialog',
            'click input[name=menuItemSizeType]': 'toggleSizes',
            'click form': 'setLastClickedFormElement',
            'submit form': 'createOrSaveMenuItem',
            'reset form': 'dismissDialog'
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
        createOrSaveMenuItem: function (e) {
            var itemUid = this.model.get('itemUid'),
                formData = this.parseForm(e.target);

            e.preventDefault();

            if (!itemUid) {
                this.options.collections.menuItems.create(formData, this.onCreateOrSave());
            } else {
                this.model.save(formData, this.onCreateOrSave());
            }

            this.dismissDialog(e);

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
        dismissDialog: function (e) {
            var dialogId = $(e.target).closest('.modal').attr('id');
            $('#' + dialogId).modal('hide');
            this.showSingleSize();
        },
        onCreateOrSave: function () {
            var self = this;
            return {
                success: function (menuItem) {
                    menuItem.save({itemUid: menuItem.id});
                    if (self.sizes.length > 1) {
                        self.sizesView.save(menuItem, self.options.collections.menuItemSizes);
                    } else {
                        self.sizes.reset([]);
                    }
                }
            };
        }
    });
    return AddMenuItemView;
});