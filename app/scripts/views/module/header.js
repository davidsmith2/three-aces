define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/views/module/header'
], function (Backbone, Marionette, $, _, Template) {
    var HeaderView = Backbone.View.extend({
        template: Template,
        initialize: function (options) {
            this.model = options.model;
        },
        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }
    });
    return HeaderView;
});
