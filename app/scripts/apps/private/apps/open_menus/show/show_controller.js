define([
	'app',
	'apps/private/apps/open_menus/dialog/views/footer',
	'apps/private/apps/open_menus/show/views/layout',
	'apps/private/apps/open_menus/show/views/menus',
	'apps/private/apps/open_menus/show/views/panel',
	'apps/private/apps/open_menus/show/views/panel_button',
	'apps/private/common/views/dialog',
	'apps/private/common/views/form',
], function (App, DialogFooterView, LayoutView, MenusView, PanelView, PanelButtonView, DialogView, FormView) {
	App.module('PrivateApp.OpenMenusApp.Show', function (Show, App, Backbone, Marionette, $) {
		var show = function (openMenu) {
			$.when(App.request('menu:entities', openMenu)).done(function (menus) {
				var layoutView,
					restaurantView,
					environmentView,
					menusView;
				layoutView = new LayoutView();
				restaurantView = new PanelView({
					model: openMenu.get('restaurant_info'),
					callback: function (panel) {
						onRestaurantPanelCreate(panel, this.model);
					}
				});
				environmentView = new PanelView({
					model: openMenu.get('environment'),
					callback: function (panel) {
						onEnvironmentPanelCreate(panel, this.model);
					}
				});
				menusView = new PanelView({
					collection: menus,
					callback: function (panel) {
						onMenusPanelCreate(panel, this.collection);
					}
				});
				layoutView.on('show', function () {
					this.restaurantRegion.show(restaurantView);
					this.environmentRegion.show(environmentView);
					this.menusRegion.show(menusView);
				});
				App.mainRegion.show(layoutView);
			});
		};
		var onRestaurantPanelCreate = function (panel, restaurant) {
			var panelButtonView = new PanelButtonView({
				model: restaurant
			});
			var panelBodyView = new FormView({
                model: restaurant,
                isReadOnly: true
            });
			panelButtonView.render();
			panelButtonView.on('edit', function (options) {
				App.execute('dialog:show', {
					model: options.model,
					callback: function (dialog) {
						onRestaurantEdit(dialog, panel, options.model);
					}
				});
			});
			panel.ui.heading.addClass('clearfix');
			panel.ui.heading.append('<h2 class="panel-title pull-left">Restaurant</h2>');
			panel.ui.heading.append(panelButtonView.el);
            panel.bodyRegion.show(panelBodyView);
		};
		var onEnvironmentPanelCreate = function (panel, environment) {
			var panelButtonView = new PanelButtonView({
				model: environment
			});
            var panelBodyView = new FormView({
                model: environment,
                isReadOnly: true
            });
			panelButtonView.render();
			panelButtonView.on('edit', function (options) {
				App.execute('dialog:show', {
					model: options.model,
					callback: function (dialog) {
						onEnvironmentEdit(dialog, panel, options.model);
					}
				});
			});
			panel.ui.heading.addClass('clearfix');
			panel.ui.heading.append('<h2 class="panel-title pull-left">Environment</h2>');
			panel.ui.heading.append(panelButtonView.el);
            panel.bodyRegion.show(panelBodyView);
		};
		var onMenusPanelCreate = function (panel, menus) {
            var panelBodyView = new MenusView({
                collection: menus
            });
			panel.ui.heading.append('<h2 class="panel-title">Menus</h2>');
            panel.bodyRegion.show(panelBodyView);
		};
		var onRestaurantEdit = function (dialog, panel, restaurant) {
			var title,
				bodyView,
				footerView;
			title = '<h3>Restaurant</h3>';
			bodyView = new FormView({
				model: restaurant
			});
			footerView = App.request('dialog:footer:create', {
				model: restaurant,
				buttons: {
					save: true,
					saveClose: false,
					cancel: true
				}
			});
			footerView.on('save', function (options) {
				options.model.save();
				panel.render();
				dialog.dismiss();
			});
			footerView.on('cancel', function () {
				dialog.dismiss();
			});
			dialog.ui.title.html(title);
			dialog.bodyRegion.show(bodyView);
			dialog.footerRegion.show(footerView);
		};
		var onEnvironmentEdit = function (dialog, panel, environment) {
			var title,
				bodyView,
				footerView;
			title = '<h3>Environment</h3>';
			bodyView = new FormView({
				model: environment
			});
			footerView = App.request('dialog:footer:create', {
				model: environment,
				buttons: {
					save: true,
					saveClose: false,
					cancel: true
				}
			});
			footerView.on('save', function (options) {
				options.model.save();
				panel.render();
				dialog.dismiss();
			});
			footerView.on('cancel', function () {
				dialog.dismiss();
			});
			dialog.ui.title.html(title);
			dialog.bodyRegion.show(bodyView);
			dialog.footerRegion.show(footerView);
		};
		Show.Controller = {
			show: show
		};
	});
	return App.PrivateApp.OpenMenusApp.Show.Controller;
});
