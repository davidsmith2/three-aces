define([
    'backbone.marionette',
    'hbs!tmpl/layouts/dialog',
    'bootstrap'
], function (Marionette, Template) {
    'use strict';
    Marionette.Layout.Dialog = Marionette.Layout.extend({
        className: 'modal hide',
        template: Template,
        regions: {
            titleRegion: '.modal-title',
            bodyRegion: '.modal-body',
            footerRegion: '.modal-footer'
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
    return Marionette.Layout.Dialog;
});