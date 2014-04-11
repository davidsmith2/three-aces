define([
    'backbone',
    'hbs!tmpl/item/dialogTitle'
], function (Backbone, DialogTitleTmpl) {
    'use strict';
    var DialogTitleView = Backbone.View.extend({
        template: DialogTitleTmpl,
        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }
    });
    return DialogTitleView;
});
