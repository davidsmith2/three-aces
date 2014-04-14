define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/item/dialog'
], function (Backbone, Marionette, $, _, DialogTmpl) {
    'use strict';
    var DialogLayout = Backbone.Marionette.Layout.extend({
        className: 'modal hide',
        template: DialogTmpl,
        regions: {
            header: '.modal-header',
            title: '.modal-header-title',
            body: '.modal-body',
            footer: '.modal-footer'
        },
        events: {
            'click .close': 'hide'
        },
        onRender: function () {
            this.$(this.title.el).html(this.options.title);
            this.body.show(this.options.body);
            this.show();
        },
        show: function () {
            this.$el.modal('show');
        },
        hide: function (e) {
            e.preventDefault();
            this.$el.modal('hide');
        }
    });
    return DialogLayout;
});