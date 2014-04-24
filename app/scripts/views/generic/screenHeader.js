define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/screenHeader'
], function (Backbone, Marionette, $, _, ScreenHeaderTmpl) {
    var ScreenHeaderView = Backbone.View.extend({
        template: ScreenHeaderTmpl,
        initialize: function (options) {
            this.model = options.model;
        },
        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }
    });
    return ScreenHeaderView;
});
