define([
    'backbone.marionette',
    'hbs!apps/private/apps/menus/views/destroy/templates/body'
],
function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: template,
        tagName: 'p'
    });
});
