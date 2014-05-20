# Three Aces

## API

| HTTP verb | URL
| --------- | ---
| GET       | /openmenus
| POST      | /openmenus
| GET       | /openmenus/:open_menu
| PUT       | /openmenus/:open_menu
| DELETE    | /openmenus/:open_menu
| GET       | /openmenus/:open_menu/restaurant
| POST      | /openmenus/:open_menu/restaurant
| GET       | /openmenus/:open_menu/environment
| POST      | /openmenus/:open_menu/environment
| GET       | /openmenus/:open_menu/menus
| POST      | /openmenus/:open_menu/menus
| GET       | /openmenus/:open_menu/menus/:menu
| PATCH     | /openmenus/:open_menu/menus/:menu
| DELETE    | /openmenus/:open_menu/menus/:menu

## File organization

* scripts/
  * app.js - the basic app
  * init.js - requirejs configuration
  * main.js - starts the basic app
  * apps/
    * private/
      * private_app.js - allows you to create open menus
      * apps/
        * open_menus/
        * menus/
    * public/
      * public_app.js - allows you to order menu items from open menus
  * common/
  * entities/ - models, collections and request handlers
  * vendor/

## Selected dependencies

### Client-side

* backbone - for basic models, views, etc. backbone.marionette builds on this.
* backbone-forms - for generating HTML forms from Backbone models
* backbone.marionette - for modules, controllers, views, etc.
* backbone-relational - for keeping nested client-side models in sync
* handlebars - for templating
* requirejs - for asynchronous loading of client-side JavaScript

### Server-side

* express - for Node.js integration
* express-resource-new - for Rails-like server-side controllers
* mongodb - for data persistence
* mongoose - for server-side object modelling
