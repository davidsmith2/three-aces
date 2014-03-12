define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/nav',
    'bootstrap'
], function ($, _, Backbone, template) {
    'use strict';

    var NavView = Backbone.Marionette.ItemView.extend({
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