define([
    'underscore',
    'app',
    'apps/private/apps/restaurant/views/show/header',
    'apps/private/apps/restaurant/views/show/definitionList'
],
function (_, App, HeaderView, DefinitionListView) {
    return function (options) {
        var headerView,
            definitionListView;
        _.extend(options.model.attributes, {
            title: 'Restaurant'
        });
        headerView = new HeaderView({
            model: options.model
        });
        definitionListView = new DefinitionListView({
            model: options.model
        });
        headerView.on('edit', function (options) {
            options.model.on('change', definitionListView.render, definitionListView);
            App.vent.trigger('restaurant:edit', options);
        });
        App.execute('panel:show', {
            region: options.region,
            headingView: headerView,
            bodyView: definitionListView,
            callback: function (panel) {
                panel.ui.heading.addClass('clearfix');
            }
        });
    };
});
