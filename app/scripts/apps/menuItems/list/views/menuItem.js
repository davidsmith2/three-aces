define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItem',
    'apps/menuItems/list/views/menuItemSizes'
], function (Marionette, $, template, MenuItemSizes) {
    'use strict';
    var MenuItem = Marionette.ItemView.extend({
        tagName: 'tr',
        template: template,
        onRender: function () {
            var sizes = this.model.get('sizes');
            var sizesView = new MenuItemSizes({
                collection: sizes
            });
            if (sizes.length) {
                this.$('.menuItemSizesContainer').replaceWith(sizesView.render().el);
            }
        }
    });
    return MenuItem;
});