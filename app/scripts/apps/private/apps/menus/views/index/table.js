define([
    'backbone.marionette',
    'app',
    'apps/private/apps/menus/views/index/empty',
    'apps/private/apps/menus/views/index/tableRow'
], function (Marionette, App, EmptyView, TableRowView) {
    return Marionette.CollectionView.extend({
        tagName: 'table',
        className: 'table table-striped',
        childView: TableRowView,
        emptyView: EmptyView
    });
});
