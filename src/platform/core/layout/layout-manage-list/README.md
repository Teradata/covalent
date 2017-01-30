## TdLayoutManageListComponent: td-layout-manage-list

`<td-layout-manage-list>` is a layout component which lets you customize a `management` view with toolbar items, item selections and footers.


## API Summary

| Name | Type | Description |
| --- | --- | --- |
| mode | 'over', 'side' or 'push' | The mode or styling of the sidenav. Defaults to 'side'.
| opened | boolean | Whether or not the sidenav is opened. Use this binding to open/close the sidenav. Defaults to 'true'.
| sidenavWidth | string | Sets the 'width' of the sidenav in either 'px' or '%' ('%' is not well supported yet as stated in the layout docs). Defaults to '257px'.


## Usage

`[td-sidenav-content]` is used to include items in the left side list.

`[td-toolbar-content]` is used to include items in the toolbar.

`td-layout-footer-inner` is used to include items in the inner footer.

Example for Manage List Layout / Nav Layout combo:

```html
<td-layout-nav sidenavTitle="title" logo="logo" icon="icon" color="color">
  <div td-toolbar-content>
    .. main toolbar content
  </div>
  <td-layout-manage-list opened="true" mode="side" sidenavWidth="257px">
    <md-toolbar td-sidenav-content>
      ... toolbar in sidenav
    </md-toolbar>
    <md-nav-list td-sidenav-content>
      ... sidenav content
    </md-nav-list>
    <div td-toolbar-content>
      ... sub toolbar content
    </div>
    ... main content
    <td-layout-footer-inner>
      ... sub footer content
    </td-layout-footer-inner>
  </td-layout-manage-list>
  <td-layout-footer>
    ... main footer content
  </td-layout-footer>
</td-layout-nav>
```
