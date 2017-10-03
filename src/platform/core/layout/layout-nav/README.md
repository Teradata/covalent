## TdLayoutNavComponent: td-layout-nav

`<td-layout-nav>` is a layout component which lets you customize a `navigation` view with toolbar items and footers.


## API Summary

| Name | Type | Description |
| --- | --- | 650--- |
| toolbarTitle | string | Title set in toolbar.
| icon | string | icon name to be displayed before the title
| logo | string | logo icon name to be displayed before the title. If [icon] is set, then this will not be shown.
| color | string | optional toolbar color. Defaults to primary.
| navigationRoute | string | option to set the combined route for the icon, logo, and toolbarTitle.


## Usage

`[td-menu-button]` is used to include a menu button before the logo and title.

`[td-toolbar-content]` is used to include items in the toolbar.

`td-layout-footer` is used to include items in the footer.

Example for Nav Layout:

```html
<td-layout-nav toolbarTitle="title" logo="logo" icon="icon" color="primary" navigationRoute="/">
  <button mat-icon-button td-menu-button> // can use `[tdLayoutToggle]` to toggle main sidenav
    <mat-icon>menu</mat-icon>
  </button>
  <div td-toolbar-content>
    .. main toolbar content
  </div>
  ... main content
  <td-layout-footer color="primary"> // color is optional
    ... main footer content
  </td-layout-footer>
</td-layout-nav>
```
