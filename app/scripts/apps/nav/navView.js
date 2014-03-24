define([
    'jquery',
    'backbone.marionette',
    'hbs!tmpl/nav'
], function ($, Marionette, template) {
    'use strict';
    var NavView = Marionette.ItemView.extend({
        template: template,
        events: {
            'click .btn': 'addMenuItem'
        },
        addMenuItem: function (e) {
            var modalId = $(e.target).attr('href');
            e.preventDefault();
            this.trigger('navView:addMenuItem', modalId);
        }
    });
    return NavView;
});