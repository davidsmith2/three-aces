define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'layouts/base',
    'hbs!tmpl/layouts/dialog',
    'bootstrap'
], function (Backbone, Marionette, $, _, vent, BaseLayout, DialogTmpl) {
    'use strict';
    var DialogLayout = BaseLayout.extend({
        className: 'modal hide',
        template: DialogTmpl,
        regions: {
            title: '.modal-title',
            body: '.modal-body',
            footer: '.modal-footer'
        },
        events: {
            'click .close': 'hide'
        },
        initialize: function () {
            this.listenTo(vent, 'layout:dialog:showViews', this.showViews);
            this.listenTo(vent, 'layout:dialog:showView', this.showView);
        },
        onRender: function () {
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