define([
    'jquery',
    'underscore',
	'app',
	'apps/private/apps/environment/views/show/header',
    'apps/private/apps/environment/views/show/definitionList'
],
function ($, _, App, HeaderView, DefinitionListView) {
	return function (openMenu) {
        var environment = openMenu.get('environment'),
            headerView,
            definitionListView;
        _.extend(environment.attributes, {title: 'Environment'});
        headerView = new HeaderView({model: environment});
        definitionListView = new DefinitionListView({model: environment});
        headerView.on('edit', function () {
            App.PrivateApp.EnvironmentApp.trigger('environment:edit', openMenu);
        });
        App.execute('panel:show', {
            region: App.environmentRegion,
            headingView: headerView,
            bodyView: definitionListView,
            callback: function (panel) {
                panel.ui.heading.addClass('clearfix');
            }
        });
	};
});
