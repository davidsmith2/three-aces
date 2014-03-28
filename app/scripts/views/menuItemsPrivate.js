define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItemsPrivate',
    'views/menuItemPrivate'
], function (Marionette, $, template, MenuItemPrivateView) {
    'use strict';
    var MenuItemsPrivateView = Marionette.CompositeView.extend({
        itemView: MenuItemPrivateView,
        itemViewContainer: 'tbody',
        template: template,
        events: {
            'click .linkEditMenuItem': 'edit',
            'click .linkDeleteMenuItem': 'delete'
        },
        edit: function (e) {
            e.preventDefault();
            console.log(e.target.href)
        },
        delete: function (e) {
            e.preventDefault();
            var model = this.collection.get(e.target.id.split('-')[1]);
            model.destroy();
        }
    });
    return MenuItemsPrivateView;
});