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
            title: '.modal-header-title',
            body: '.modal-body',
            footer: '.modal-footer'
        },
        events: {
            'click .close': 'hide'
        },
        initialize: function (options) {
            this.views = options.views;
        },
        onRender: function () {
            this.title.show(this.views.title);
            this.body.show(this.views.body);
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