define([
    'backbone.marionette',
    'hbs!apps/private/common/views/templates/buttons'
], function (Marionette, Template) {
    var ButtonsView = Marionette.ItemView.extend({
        template: Template,
        triggers: {
            'click .save': 'save',
            'click .cancel': 'cancel'
        }
    });
    return ButtonsView;
});
