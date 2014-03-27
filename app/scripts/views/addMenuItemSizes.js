define([
    'underscore',
    'backbone.marionette',
    'jquery',
    'entities/menuItemSize',
    'views/addMenuItemSize'
], function (_, Marionette, $, MenuItemSize, AddMenuItemSize) {
    'use strict';
    var AddMenuItemSizesView = Marionette.CollectionView.extend({
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
        save: function (menuItemModel, menuItemSizesCollection) {
            var menuItemSizes = this.collection.models.slice(0, (this.collection.length - 1)),
                menuItemSize;
            menuItemModel.set('menuItemSizes', menuItemSizes);
            for (var i = 0, len = menuItemSizes.length; i < len; i++) {
                menuItemSize = menuItemSizes[i];
                menuItemSize.menuItem = menuItemModel.get('_id');
                menuItemSizesCollection.create(menuItemSize);
            }
        }
    });
    return AddMenuItemSizesView;
});