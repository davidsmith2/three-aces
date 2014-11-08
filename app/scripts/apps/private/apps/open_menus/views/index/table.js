define([
	'backbone.marionette',
	'app',
	'apps/private/apps/open_menus/views/index/empty',
	'apps/private/apps/open_menus/views/index/tableRow'
], function (Marionette, App, EmptyView, TableRowView) {
	return Marionette.CollectionView.extend({
		tagName: 'table',
		className: 'table table-striped',
		childView: TableRowView,
		emptyView: EmptyView,
		initialize: function (options) {
			this.on('childview:openMenu:show', function (itemView, options) {
				App.vent.trigger('openMenu:show', options.model.get('_id'));
			});
			this.on('childview:openMenu:delete', function (itemView, options) {
				App.vent.trigger('openMenu:delete', options.model.get('_id'));
			});
		}
	});
});
