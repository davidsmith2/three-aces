define([
    'application',
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/add-menu-item-size',
    'hbs!tmpl/add-menu-item'
], function (App, $, _, Backbone, AddMenuItemSizeTmpl, AddMenuItemTmpl) {
    'use strict';

    var Form = App.module('MenuItemsApp.Form');

    Form.AddMenuItemSize = Backbone.Marionette.ItemView.extend({
        className: 'control-group row size',
        template: AddMenuItemSizeTmpl,
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
            formData.price = parseFloat(this.$('input[name=sizePrice]').val(), 2);
            this.model.set(formData);
            this.trigger('addSize');
        },
        delete: function (e) {
            e.preventDefault();
            this.remove();
            this.trigger('deleteSize', this.model);
        }
    });

    Form.AddMenuItemSizes = Backbone.Marionette.CollectionView.extend({
        itemView: Form.AddMenuItemSize,
        onRender: function () {
            this._buildItemView();
        },
        _buildItemView: function () {
            var item = new App.Entities.MenuItemSize();
            var ItemViewType = Form.AddMenuItemSize;
            var itemViewOptions = {
                collection: this.collection.push(item)
            };
            this.buildItemView(item, ItemViewType, itemViewOptions);
        },
        buildItemView: function (item, ItemViewType, itemViewOptions) {
            var options = _.extend({model: item}, itemViewOptions);
            var view = new ItemViewType(options);
            this.listenTo(view, 'addSize', this.onAddSize);
            this.listenTo(view, 'deleteSize', this.onDeleteSize);
            return view;
        },
        onAddSize: function () {
            this._buildItemView();
        },
        onDeleteSize: function (size) {
            this.collection.remove(size);
        },
        save: function (menuItem) {
            var tmpCollection = this.collection,
                permCollection;
            if (tmpCollection.length > 1) {
                permCollection = App.request('menuItemSizes:entities');
                permCollection.done(function (_permCollection) {
                    tmpCollection.each(function (model, index) {
                        if (index < tmpCollection.length - 1) {
                            model.set('menuItem', menuItem.get('_id'));
                            _permCollection.create(model);
                        }
                    });
                });
            }
        },
        dismiss: function () {
            this.collection.reset([]);
        }
    });

    Form.AddMenuItem = Backbone.Marionette.ItemView.extend({
        template: AddMenuItemTmpl,
        onRender: function () {
            var sizes = new Backbone.Collection();
            var sizesView = new Form.AddMenuItemSizes({
                collection: sizes
            });
            this.$('#sizes').append(sizesView.render().el);
            this.on('save', sizesView.save, sizesView);
            this.on('dismiss', sizesView.dismiss, sizesView);
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
            this.collection.create(formData, {
                success: function (response) {
                    self.trigger('save', response);
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

    return Form;

});