define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/add-menu-item',
    'collections/menu-item-sizes',
    'models/menu-item-size',
    'views/add-menu-item-size'
], function ($, _, Backbone, template, MenuItemSizesCollection, MenuItemSizeModel, AddMenuItemSizeView) {
    'use strict';

    var AddMenuItemView = Backbone.Marionette.ItemView.extend({
        template: template,
        initialize: function () {
            this.on('render', this.initSizesCollection, this);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.trigger('render');
            return this;
        },
        events: {
            'click input[name=sizeType]': 'handleSizeTypeClick',
            'submit': 'handleSubmit'
        },
        handleSubmit: function (e) {
            e.preventDefault();
            this.save(e.target);
        },
        save: function (target) {
            var formData = {};
            $(target).find('input[name]').each(function (i, el) {
                var name = el.name,
                    val = $(el).val();

                if (val !== '') {
                    formData[name] = val;
                }
                $(el).val('');
            });
            this.collection.create(formData);
        },
        handleSizeTypeClick: function (e) {
            this.toggleSizeTypes(e.target);
        },
        toggleSizeTypes: function (target) {
            if ($(target).val() === 'singleSize') {
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
        initSizesCollection: function () {
            var sizesCollection = new MenuItemSizesCollection();
            sizesCollection.fetch();
            sizesCollection.on('sync', this.initSizeView, this);
        },
        initSizeView: function (sizesCollection) {
            var sizeView = new AddMenuItemSizeView({
                collection: sizesCollection,
                model: new MenuItemSizeModel()
            });
            this.$('#sizes').append(sizeView.render().el);
            sizeView.on('add', this.addSize, this);
            sizeView.on('delete', this.deleteSize, this);
        },
        addSize: function (sizesCollection) {
            if (sizesCollection.length < 5) {
                this.initSizeView(sizesCollection);
            }
        },
        deleteSize: function (sizesCollection) {
            if (!sizesCollection.length) {
                this.initSizeView(sizesCollection);
            }
        }
    });

    return AddMenuItemView;

});