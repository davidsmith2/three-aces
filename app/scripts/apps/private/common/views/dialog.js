define([
    'backbone.marionette',
    'jquery',
    'hbs!apps/private/common/views/templates/dialog',
    'bootstrap'
], function (Marionette, $, Template) {
    var DialogLayout = Marionette.Layout.extend({
        className: 'modal',
        template: Template,
        regions: {
            headerRegion: '.modal-header',
            bodyRegion: '.modal-body',
            footerRegion: '.modal-footer'
        },
        events: {
            'click .close': 'closeDialog'
        },
        onShow: function () {
            this.$el.modal('show');
        },
        closeDialog: function (e) {
            e.preventDefault();
            this.stopListening();
            this.close();
            this.$el.modal('hide');
            $('.modal-backdrop').remove();
        }
    });
    return DialogLayout;
});
