define([
    'backbone.marionette',
    'bootstrap'
], function (Marionette) {
    'use strict';
    Marionette.Region.Dialog = Marionette.Region.extend({
        onShow: function (view) {
            this.listenTo(view, 'dialog:close', this.closeDialog);
            this.$el.modal('show');
        },
        closeDialog: function () {
            this.stopListening();
            this.close();
            this.$el.modal('hide');
        }
    });
    return Marionette.Region.Dialog;
});