define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuGroups/views/composite',
    'controllers/collection',
    'entities/models/menuGroup',
    'layouts/dialog',
    'vents/layout',
    'vents/ui'
], function (Backbone, Marionette, $, _, MenuGroupsView, CollectionController, MenuGroup, DialogLayout, layoutVent, uiVent) {
    'use strict';
    var MenuGroupsController = CollectionController.extend({
        relatedModel: MenuGroup,
        relatedViews: {
            body: MenuGroupsView
        },
        viewModels: {
            header: {
                title: 'Menu groups',
                description: 'Add a new menu group or update an existing one.'
            },
            footer: {
                shortTitle: 'menuGroups'
            }
        },
        initialize: function () {
            this.listenTo(uiVent, 'ui:menuGroup:add', this.onAdd);
            this.listenTo(uiVent, 'ui:menuGroup:edit', this.onEdit);
            this.listenTo(uiVent, 'ui:menuGroup:delete', this.onDelete);
        },
        onAddOrEdit: function () {
            console.log('hello')
        }
    });
    return new MenuGroupsController();
});
