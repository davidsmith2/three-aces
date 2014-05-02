define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/mainHeader'
], function (Backbone, Marionette, $, _, MainHeaderTmpl) {
    var MainHeaderView = Backbone.View.extend({
        template: MainHeaderTmpl,
        initialize: function (options) {
            this.model = options.model;
        },
        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }
    });
    return MainHeaderView;
});
