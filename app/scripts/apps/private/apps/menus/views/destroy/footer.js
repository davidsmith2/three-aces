define([
    'backbone.marionette',
    'hbs!apps/private/apps/menus/views/destroy/templates/footer'
],
function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: template,
        triggers: {
            'click .js-yes': 'yes',
            'click .js-no': 'no'
        }
    });
});
