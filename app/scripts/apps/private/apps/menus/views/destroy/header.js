define([
    'backbone.marionette',
    'hbs!apps/private/apps/menus/views/destroy/templates/header'
],
function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: template,
        tagName: 'h2'
    });
});
