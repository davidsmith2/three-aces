define([
    'backbone.marionette',
    'hbs!apps/private/apps/environment/views/show/templates/definitionList'
],

function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: template,
        tagName: 'dl'
    });
});
