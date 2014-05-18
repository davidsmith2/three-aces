define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/views/module/footer'
], function (Backbone, Marionette, $, _, Template) {
    var FooterView = Backbone.Marionette.ItemView.extend({
        template: Template
    });
    return FooterView;
});
