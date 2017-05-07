## TdLayoutNavComponent: td-layout-nav

`<td-layout-nav>` is a layout component which lets you customize a `navigation` view with toolbar items and footers.


## API Summary

| Name | Type | Description |
| --- | --- | --- |
| toolbarTitle | string | Title set in toolbar.
| icon | string | icon name to be displayed before the title
| logo | string | logo icon name to be displayed before the title. If [icon] is set, then this will not be shown.
| color | string | optional toolbar color. Defaults to primary.
| navigationRoute | string | route for the icon, logo, and toolbarTitle. Defaults to '/'.


## Usage

`[td-toolbar-content]` is used to include items in the toolbar.

`td-layout-footer` is used to include items in the footer.

Example for Nav Layout:

```html
<td-layout-nav toolbarTitle="title" logo="logo" icon="icon" color="color" navigationRoute="/">
  <div td-toolbar-content>
    .. main toolbar content
  </div>
  ... main content
  <td-layout-footer>
    ... main footer content
  </td-layout-footer>
</td-layout-nav>
```
