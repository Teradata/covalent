## TdLayoutManageListComponent: td-layout-manage-list

`<td-layout-manage-list>` is a layout component which lets you customize a `management` view with toolbar items, item selections and footers.


## API Summary

| Name | Type | Description |
| --- | --- | --- |
| mode | 'over', 'side' or 'push' | The mode or styling of the sidenav. Defaults to 'side'.
| opened | boolean | Whether or not the sidenav is opened. Use this binding to open/close the sidenav. Defaults to 'true'.
| sidenavWidth | string | Sets the 'width' of the sidenav in either 'px' or '%'. Defaults to '257px'.


## Usage

To toggle/close/open the manage list sidenav from child layouts/components, you can use the `[tdLayoutManageListToggle]`, `[tdLayoutManageListClose]` or `[tdLayoutManageListOpen]` directives on any element and its click event will trigger the sidenav action.

Example:

```html
<button md-icon-button [tdLayoutManageListToggle]="true" [hideWhenOpened]="true"> // or tdLayoutManageListOpen / tdLayoutManageListClose
  <md-icon>menu</md-icon>
</button>
```

To disable the sidenav action, just set the input to false.

```html
<button md-icon-button [tdLayoutManageListToggle]="false">
  <md-icon>menu</md-icon>
</button>
```

`[td-sidenav-content]` is used to include items in the left side list.

`[td-toolbar-content]` is used to include items in the toolbar.

`td-layout-footer-inner` is used to include items in the inner footer.

`[tdLayoutManageListToggle]` is used to add the sidenav toggle behavior to any clickable element.

`[tdLayoutManageListClose]` is used to add the sidenav close behavior to any clickable element.

`[tdLayoutManageListOpen]` is used to add the sidenav open behavior to any clickable element.

Example for Manage List Layout / Nav Layout combo:

```html
<td-layout-nav sidenavTitle="title" logo="logo" icon="icon" color="primary">
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
    <md-toolbar>
      <button md-icon-button tdLayoutManageListOpen [hideWhenOpened]="true">
        <md-icon>arrow_back</md-icon>
      </button>
      ... sub toolbar content
    </md-toolbar>
    ... main content
    <td-layout-footer-inner>
      ... sub footer content
    </td-layout-footer-inner>
  </td-layout-manage-list>
  <td-layout-footer color="primary"> // color is optional
    ... main footer content
  </td-layout-footer>
</td-layout-nav>
```
