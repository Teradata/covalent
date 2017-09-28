## TdLayoutNavListComponent: td-layout-nav-list

`<td-layout-nav-list>` is a layout component which lets you customize a `navigation` list view with toolbar items, item selections and footers.


## API Summary

| Name | Type | Description |
| --- | --- | 650--- |
| toolbarTitle | string | Title set in toolbar.
| icon | string | icon name to be displayed before the title
| logo | string | logo icon name to be displayed before the title. If [icon] is set, then this will not be shown.
| color | string | optional toolbar color. Defaults to primary.
| navigationRoute | string | option to set the combined route for the icon, logo, and toolbarTitle.
| mode | 'over', 'side' or 'push' | The mode or styling of the sidenav. Defaults to 'side'.
| opened | boolean | Whether or not the sidenav is opened. Use this binding to open/close the sidenav. Defaults to 'true'.
| sidenavWidth | string | Sets the 'width' of the sidenav in either 'px' or '%'. Defaults to '257px'.


## Usage

To toggle/close/open the nav list sidenav from child layouts/components, you can use the `[tdLayoutNavListToggle]`, `[tdLayoutNavListClose]` or `[tdLayoutNavListOpen]` directives on any element and its click event will trigger the sidenav action.

Example:

```html
<button mat-icon-button [tdLayoutNavListToggle]="true" [hideWhenOpened]="true"> // or tdLayoutNavListOpen / tdLayoutNavListClose
  <mat-icon>menu</mat-icon>
</button>
```

To disable the sidenav action, just set the input to false.

```html
<button mat-icon-button [tdLayoutNavListToggle]="false">
  <mat-icon>menu</mat-icon>
</button>
```

`[td-menu-button]` is used to include a menu button before the logo and title.

`[td-sidenav-content]` is used to include items in the left side list.

`[td-sidenav-toolbar-content]` is used to include items in the left toolbar.

`[td-toolbar-content]` is used to include items in the right toolbar.

`td-layout-footer-inner` is used to include items in the inner footer.

`td-layout-footer` is used to include items in the main footer.

`[tdLayoutNavListToggle]` is used to add the sidenav toggle behavior to any clickable element.

`[tdLayoutNavListClose]` is used to add the sidenav close behavior to any clickable element.

`[tdLayoutNavListOpen]` is used to add the sidenav open behavior to any clickable element.

Example for Nav List Layout:

```html
<td-layout-nav-list sidenavTitle="title" logo="logo" icon="icon" opened="true" mode="side" sidenavWidth="350px" color="primary" navigationRoute="/">
  <button mat-icon-button td-menu-button> // can use `[tdLayoutToggle]` to toggle main sidenav
    <mat-icon>menu</mat-icon>
  </button>
  <div td-sidenav-toolbar-content>
    ... left toolbar content
  </div>
  <mat-nav-list td-sidenav-content>
    <button mat-icon-button tdLayoutNavListOpen [hideWhenOpened]="true">
      <mat-icon>arrow_back</mat-icon>
    </button>
    ... sidenav content
  </mat-nav-list>
  <div td-toolbar-content>
    ... right toolbar content
  </div>
  ... main content
  <td-layout-footer-inner>
    ... sub footer content
  </td-layout-footer-inner>
  <td-layout-footer color="primary"> // color is optional
    ... main footer content
  </td-layout-footer>
</td-layout-nav-list>
```
