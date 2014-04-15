define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/views/menuItemPrivate'
], function (Marionette, $, template) {
    'use strict';
    var MenuItemPrivateView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: template,
        initialize: function () {
            this.listenTo(this.model, 'change:itemUid', this.render);
        }
    });
    return MenuItemPrivateView;
});