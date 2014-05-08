define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/base',
    'vents/layout',
    'hbs!tmpl/layouts/dialog',
    'bootstrap'
], function (Backbone, Marionette, $, _, BaseLayout, layoutVent, Template) {
    'use strict';
    var DialogLayout = BaseLayout.extend({
        type: 'dialog',
        className: 'modal hide',
        template: Template,
        regions: {
            title: '.modal-title',
            body: '.modal-body',
            footer: '.modal-footer'
        },
        events: {
            'click .close': 'hide'
        },
        initialize: function () {
            this.listenTo(layoutVent, 'layout:dialog:showViews', this.showViews);
            this.listenTo(layoutVent, 'layout:dialog:showView', this.showView);
        },
        onRender: function () {
            this.show();
            layoutVent.trigger('layout:' + this.type + ':rendered');
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