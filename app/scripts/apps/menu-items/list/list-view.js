define([
    'application',
    'jquery',
    'backbone.marionette',
    'hbs!tmpl/menu-item-size',
    'hbs!tmpl/menu-item',
    'hbs!tmpl/menu-items'
], function (App, $, Marionette, MenuItemSizeTmpl, MenuItemTmpl, MenuItemsTmpl) {
    'use strict';

    var List = App.module('MenuItemsApp.List');

    List.MenuItemSize = Marionette.ItemView.extend({
        tagName: 'span',
        template: MenuItemSizeTmpl
    });

    List.MenuItemSizes = Marionette.CollectionView.extend({
        itemView: List.MenuItemSize
    });

    List.MenuItem = Marionette.ItemView.extend({
        tagName: 'tr',
        template: MenuItemTmpl,
        initialize: function () {
            this.sizesCollection = this.model.get('sizes');
        },
        render: function () {
            var sizesView;
            this.$el.html(this.template(this.model.toJSON()));
            if (this.sizesCollection.length) {
                sizesView = new List.MenuItemSize({
                    collection: this.sizesCollection
                });
                this.$('.menuItemSizesContainer').replaceWith(sizesView.render().el);
            }
            return this;
        }
    });

    List.MenuItems = Marionette.CompositeView.extend({
        itemView: List.MenuItem,
        itemViewContainer: 'tbody',
        template: MenuItemsTmpl
    });

    return List;

});