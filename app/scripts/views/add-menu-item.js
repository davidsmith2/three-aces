define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/add-menu-item',
    'collections/menu-item-sizes',
    'models/menu-item-size',
    'views/add-menu-item-size',
    'views/menu-item-sizes',
    'bootstrap'
], function ($, _, Backbone, template, MenuItemSizesCollection, MenuItemSizeModel, AddMenuItemSizeView, MenuItemSizesView) {
    'use strict';

    var AddMenuItemView = Backbone.Marionette.ItemView.extend({
        template: template,
        initialize: function () {
            var self = this;
            this.sizesCollection = new MenuItemSizesCollection();
            this.sizesCollection.fetch();
            this.sizesCollection.on('sync', function () {
                self.initSizesView();
                self.trigger('sizesSync');
            });
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.trigger('render');
            return this;
        },
        events: {
            'click .close': 'dismiss',
            'click input[name=sizeType]': 'toggleSizeTypes',
            'submit form': 'save',
            'reset form': 'dismiss'
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
            this.collection.create(formData);
            if (this.sizesArr.length) {
                this.collection.on('sync', this.saveSizes, this);
            }
            this.dismiss(e);
        },
        dismiss: function (e) {
            var modalId = $(e.target).closest('.modal').attr('id');
            e.preventDefault();
            $('#' + modalId).modal('hide');
        },
        toggleSizeTypes: function (e) {
            if ($(e.target).val() === 'singleSize') {
                this.showSingleSizeType();
            } else {
                this.showMultiSizeType();
            }
        },
        showSingleSizeType: function () {
            this.$('#sizes').hide();
            this.$('#price').show();
        },
        showMultiSizeType: function () {
            this.$('#price').hide();
            this.$('#sizes').show();
        },
        initSizesView: function (sizes) {
            var sizeView;
            this.sizesArr = sizes || [];
            sizeView = new AddMenuItemSizeView({
                model: new MenuItemSizeModel(),
                sizesArr: this.sizesArr
            });
            this.$('#sizes').append(sizeView.render().el);
            sizeView.on('add', this.addSize, this);
            sizeView.on('delete', this.deleteSize, this);
        },
        addSize: function (sizes) {
            this.initSizesView(sizes);
        },
        deleteSize: function (sizes) {
            if (!sizes.length) {
                this.initSizesView(sizes);
            }
        },
        saveSizes: function (model) {
            for (var i in this.sizesArr) {
                this.sizesArr[i].menuItem = model.get('_id');
                this.sizesCollection.create(this.sizesArr[i]);
            }
            this.trigger('saveSizes', this.sizesCollection);
        }
    });

    return AddMenuItemView;

});
