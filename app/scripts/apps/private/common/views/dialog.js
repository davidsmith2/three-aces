define([
    'backbone.marionette',
    'jquery',
    'hbs!apps/private/common/views/templates/dialog',
    'bootstrap'
], function (Marionette, $, template) {
    return Marionette.LayoutView.extend({
        className: 'modal',
        template: template,
        regions: {
            headerRegion: '.modal-header',
            titleRegion: '.modal-title',
            bodyRegion: '.modal-body',
            footerRegion: '.modal-footer'
        },
        events: {
            'click .close': 'closeDialog'
        },
        onShow: function () {
            this.$el.modal('show');
            $('.modal-backdrop').css({'z-index': 0});
        },
        closeDialog: function (e) {
            e.preventDefault();
            this.stopListening();
            //this.close();
            this.$el.modal('hide');
            $('.modal-backdrop').remove();
        }
    });
});
