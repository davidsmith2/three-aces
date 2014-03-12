define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/menu-item',
    'views/menu-item-sizes'
], function ($, _, Backbone, template, MenuItemSizesView) {
    'use strict';

    var MenuItemView = Backbone.Marionette.ItemView.extend({
        tagName: 'tr',
        template: template,
        initialize: function () {
            this.sizesCollection = this.model.get('sizes');
        },
        render: function () {
            var sizesView;
            this.$el.html(this.template(this.model.toJSON()));
            if (this.sizesCollection.length) {
                sizesView = new MenuItemSizesView({
                    collection: this.sizesCollection
                });
                this.$('.menuItemSizesContainer').replaceWith(sizesView.render().el);
            }
            return this;
        }
    });

    return MenuItemView;

});