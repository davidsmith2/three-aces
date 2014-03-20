define([
    'jquery',
    'backbone.marionette',
    'hbs!tmpl/nav',
    'bootstrap'
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
            $(modalId).modal('show');
        }
    });
    return NavView;
});