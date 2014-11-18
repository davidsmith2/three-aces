define([
    'backbone.marionette',
    'hbs!apps/private/apps/menu/views/show/templates/definitionList'
],

function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: template,
        tagName: 'dl'
    });
});
