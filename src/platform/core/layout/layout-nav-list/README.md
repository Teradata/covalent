## TdLayoutNavListComponent: td-layout-nav-list

`<td-layout-nav-list>` is a layout component which lets you customize a `navigation` list view with toolbar items, item selections and footers.


## API Summary

| Name | Type | Description |
| --- | --- | --- |
| toolbarTitle | string | Title set in toolbar.
| icon | string | icon name to be displayed before the title
| logo | string | logo icon name to be displayed before the title. If [icon] is set, then this will not be shown.
| color | string | optional toolbar color. Defaults to primary.
| navigationRoute | string | route for the icon, logo, and toolbarTitle. Defaults to '/'.
| mode | 'over', 'side' or 'push' | The mode or styling of the sidenav. Defaults to 'side'.
| opened | boolean | Whether or not the sidenav is opened. Use this binding to open/close the sidenav. Defaults to 'true'.
| sidenavWidth | string | Sets the 'width' of the sidenav in either 'px' or '%' ('%' is not well supported yet as stated in the layout docs). Defaults to '257px'.


## Usage

`[td-sidenav-content]` is used to include items in the left side list.

`[td-sidenav-toolbar-content]` is used to include items in the left toolbar.

`[td-toolbar-content]` is used to include items in the right toolbar.

`td-layout-footer-inner` is used to include items in the inner footer.

`td-layout-footer` is used to include items in the main footer.

Example for Nav List Layout:

```html
<td-layout-nav-list sidenavTitle="title" logo="logo" icon="icon" opened="true" mode="side" sidenavWidth="350px" color="color"  navigationRoute="/">
  <div td-sidenav-toolbar-content>
    ... left toolbar content
  </div>
  <md-nav-list td-sidenav-content>
    ... sidenav content
  </md-nav-list>
  <div td-toolbar-content>
    ... right toolbar content
  </div>
  ... main content
  <td-layout-footer-inner>
    ... sub footer content
  </td-layout-footer-inner>
  <td-layout-footer>
    ... main footer content
  </td-layout-footer>
</td-layout-nav-list>
```
