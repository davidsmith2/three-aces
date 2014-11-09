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
        emptyView: EmptyView,
        initialize: function () {
/*
            this.on('childview:menu:show', function (itemView, options) {
                App.vent.trigger('menu:show', options.model.get('_id'));
            });
*/
            this.on('childview:menu:delete', function (itemView, options) {
                App.vent.trigger('menu:delete', options.model);
            });
        }
    });
});
