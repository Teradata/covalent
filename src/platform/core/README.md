# core

Core Teradata UI Platform for layouts, icons, custom components and themes. This should be added as a dependency for any project that wants to use layouts, icons and themes for Angular2-Material.

The core will have custom components that enforce standards and best practices through built-in design patterns.

## Layouts

There are five types of layouts:
 1. Main Layout - `td-layout`
    * Main layout wrapper for the application.
    * Creates a sidenav which is controlled by inner layouts (`td-layout-nav`|`td-layout-nav-list`).
    * Can display a title, username, menu-list and has logout event menu-item.
 2. Nav Layout - `td-layout-nav`
    * Has integrated menu icon to control side-nav (td-layout -> sidenav).
    * Can add elements toolbar.
 3. Nav List Layout - `td-layout-nav-list`
    * Has integrated menu icon to control side-nav (td-layout -> sidenav).
    * Can add elements to both list-toolbar (left side) and nav-toolbar (right side).
    * Displays menu-list on the left.
    * Content is displayed in the right side.
 4. Card Over Layout - `td-layout-card-over`
    * Card over toolbar effect.
    * Displays title and subtitle in card.
 5. Manage List Layout- `td-layout-manage-list`
    * Can add elements to toolbar-buttons (right side).
    * Displays menu-list on the left.
    * Content is displayed in the right side.

#### td-layout

`<md-nav-list menu-items>` is used to include items in the sidenav.

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `sidenavTitle` | `string` | SideNav Title to be displayed.
| `icon` | `string` | Uses material icon names.
| `displayName` | `string` | Username to be displayed.
| `logout` | `function()` | Function executed when logout it pressed.

#### td-layout-nav

`<div toolbar-content>` is used to include items in the toolbar.

#### td-layout-nav-list

`<md-nav-list list-items>` is used to include items in the left side list.
`<div list-toolbar-content>` is used to include items in the left side toolbar.
`<div nav-toolbar-content>` is used to include items in the right side toolbar.

#### td-layout-card-over

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cardTitle` | `string` | Title in card to be displayed.
| `cardSubtitle` | `string` | Subtitle in card to be displayed.

#### td-layout-manage-items

`<md-nav-list list-items>` is used to include items in the left side list.
`<div toolbar-content>` is used to include items in the toolbar.

#### Usage

Example Nav Layout / Main Layout combo:

```html
<td-layout #layout>
  <menu-items>
    <a *ngFor="let item of routes" md-list-item [routerLink]="[item.route]" (click)="layout.close()"><md-icon>{{item.icon}}</md-icon>{{item.title}}</a>
  </menu-items>
  <td-layout-nav toolbarTitle="Toolbar Title">
    <div toolbar-content layout="row" layout-align="center center" flex>
      <span>Title</span>
      <span flex></span>
    </div>
    CONTENT
  </td-layout-nav>
</td-layout>
```

Example Nav List Layout:

```html
<td-layout-nav-list #list>
  <div list-toolbar-content layout="row" layout-align="center center" flex>
    <span>App Name</span>
    <span flex></span>
    <button md-button (click)="search()" class="md-icon-button"><md-icon class="md-24">search</md-icon></button>
  </div>
  <md-nav-list list-items>
    <a md-list-item>
    <md-icon md-list-avatar>dashboard</md-icon>
    <h3 md-line> Item Name </h3>
    <p md-line> Item description </p>
    </a>
    <md-divider *ngIf="!last" md-inset></md-divider>
  </md-nav-list>
  <div nav-toolbar-content layout="row" layout-align="center center" flex>
    <span>View Name</span>
    <span flex></span>
  </div>
  ...
</td-layout-nav-list>
```

Example for Manage List Layout / Nav Layout combo:

```html
<td-layout-nav>
  <td-layout-manage-list #list>
    <md-nav-list list-items>
      ...
    </md-nav-list>
    <div toolbar-buttons>
      ...
    </div>
    ... /* content */
  </td-layout-manage-list>
</td-layout-nav>
```

Example for Card Over Layout / Nav Layout / Main Layout combo:

```html
<td-layout #layout sidenavTitle="App Title" displayName="username">
  <menu-items>
    ...
  </menu-items>
  <td-layout-nav toolbarTitle="Toolbar Title">
    <td-layout-card-over cardTitle="Card Title" cardSubtitle="Card subtitle">
      <md-card-content>
        ...
      </md-card-content>
      <md-divider></md-divider>
      <md-card-actions>
        ...
      </md-card-actions>
    </td-layout-card-over>
  </td-layout-nav>
</td-layout>
```

## Styles, Icons and Theming

Core Teradata UI Platform comes with a base CSS file `styles/platform.css` (includes icons), just include that in your `index.html` to apply in your project. 
NOTE: Must compile the package as vendor and pull everything from `node_module/@covalent/core` to be able to reference it.