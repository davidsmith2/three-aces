define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/views/module/header'
], function (Backbone, Marionette, $, _, Template) {
    var HeaderView = Backbone.Marionette.ItemView.extend({
        template: Template
    });
    return HeaderView;
});