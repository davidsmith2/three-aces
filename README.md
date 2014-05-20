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

## Selected dependencies

### Client-side

* backbone-forms - generates forms from Backbone models
* backbone.marionette - for structuring client code in an MVC-like way
* backbone-relational - for keeping nested client-side models in sync
* handlebars - for templating

### Server-side

* express - web application framework for Node.js
* express-resource-new - provides Rails-like server-side controllers
* MongoDB - for data persistence
* mongoose - for server-side object modelling
