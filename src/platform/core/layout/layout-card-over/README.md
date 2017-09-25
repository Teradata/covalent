## TdLayoutCardOverComponent: td-layout-card-over

`<td-layout-card-over>` is a layout component which lets you customize a `card over` view.


## API Summary

| Name | Type | Description |
| --- | --- | 650--- |
| cardTitle | string | Title set in card.
| cardSubtitle | string | subtitle set in card.
| cardWidth | string | Card flex width in %. Defaults to 70.
| color | string | optional toolbar color. Defaults to primary.


## Usage

`[td-after-card]` is used to include content after the main card over content.

`td-layout-footer` is used to include items in the footer.

Example for Card Over Layout / Nav Layout combo:

```html
<td-layout-nav toolbarTitle="title" logo="logo" icon="icon" color="primary">
  <td-layout-card-over cardTitle="title" cardSubtitle="subtitle" cardWidth="widthIn%" color="primary">
    .. main content
    <div td-after-card>
      .. content after card
    </div>
  </td-layout-card-over>
  <td-layout-footer color="primary"> // color is optional
    ... main footer content
  </td-layout-footer>
</td-layout-nav>
```
