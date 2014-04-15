define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItem',
    'views/menuItemSizes'
], function (Marionette, $, template, MenuItemSizes) {
    'use strict';
    var MenuItemView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: template,
        onRender: function () {
            var sizes = this.model.get('menuItemSizes');
            var sizesView = new MenuItemSizes({
                collection: sizes
            });
            if (sizes.length) {
                this.$('.menuItemSizesContainer').replaceWith(sizesView.render().el);
            }
            this.listenTo(this.model, 'change:menuItemSizes', this.render);
        }
    });
    return MenuItemView;
});