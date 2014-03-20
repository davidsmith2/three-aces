define([
    'underscore',
    'backbone.marionette',
    'jquery',
    'entities/menuItemSize',
    'apps/menuItems/form/views/addMenuItemSize'
], function (_, Marionette, $, MenuItemSize, AddMenuItemSize) {
    'use strict';
    var AddMenuItemSizes = Marionette.CollectionView.extend({
        itemView: AddMenuItemSize,
        onRender: function () {
            this._buildItemView();
        },
        _buildItemView: function () {
            var item = new MenuItemSize();
            var ItemViewType = AddMenuItemSize;
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
            var tempCollection = this.collection,
                permCollection = App.collections.menuItemSizes;
            tempCollection.each(function (model, index) {
                if (index < (tempCollection.length - 1)) {
                    model.set('menuItem', menuItem.get('_id'));
                    permCollection.create(model);
                } else {
                    tempCollection.reset([]);
                }
            });
        }
    });
    return AddMenuItemSizes;
});