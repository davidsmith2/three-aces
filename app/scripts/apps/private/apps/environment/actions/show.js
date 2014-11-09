define([
    'underscore',
	'app',
	'apps/private/apps/environment/views/show/header',
    'apps/private/apps/environment/views/show/definitionList'
],
function (_, App, HeaderView, DefinitionListView) {
	return function (options) {
        var headerView,
            definitionListView;
        _.extend(options.model.attributes, {
            title: 'Environment'
        });
        headerView = new HeaderView({
            model: options.model
        });
        definitionListView = new DefinitionListView({
            model: options.model
        });
        App.execute('panel:show', {
            region: options.region,
            headingView: headerView,
            bodyView: definitionListView,
            callback: function (panel) {
                panel.ui.heading.addClass('clearfix');
                headerView.on('edit', function (options) {
                    options.model.on('change', definitionListView.render, definitionListView);
                    App.vent.trigger('environment:edit', options);
                });
            }
        });
	};
});
