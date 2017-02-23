## TdLayoutComponent - td-layout

`<td-layout>` is a blank main sidenav component that gets hooked as parent of all the other layouts. (triggered by their menu buttons)


## Installation

This component can be installed as npm package.

```bash
npm i -save @covalent/core
```


## Setup

Import the **[CovalentLayoutModule]** using the *forRoot()* method in your NgModule:

```typescript
import { CovalentLayoutModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentLayoutModule.forRoot(), // or CovalentCoreModule.forRoot()
    ...
  ],
  ...
})
export class MyModule {}
```


### Theming

See [theming](https://teradata.github.io/covalent/#/docs/theme) in the covalent docs for more info.


## TdNavigationDrawerComponent - td-navigation-drawer

`<td-navigation-drawer>` is a component that follows the [material design spec](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs) is used as an addon component for `td-layout`.


## API Summary

| Name | Type | Description |
| --- | --- | --- |
| sidenavTitle | string | Title set in toolbar.
| icon | string | icon name to be displayed before the title
| logo | string | logo icon name to be displayed before the title. If [icon] is set, then this will not be shown.
| color | string | optional sidenav toolbar color.
| navigationRoute | string | route for the icon, logo, and sidenavTitle. Defaults to '/'.
| backgroundUrl | SafeResourceUrl | image to be displayed as the background of the toolbar. URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
| name | string | string to be displayed as part of the navigation drawer sublabel. if [email] is not set, then [name] will be the toggle menu text.
| email | string | string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text. if [email] and [name] are not set, then the toggle menu is not rendered.


## Usage

`[td-sidenav-content]` is used to include content in the main sidenav.

`[td-navigation-drawer-menu]` is used to include content to the `toggle` user menu. if no tag is used, then the toggle button dissapears.

Example for Main Layout / Navigation Drawer Combo:

```html
<td-layout>
  <td-navigation-drawer sidenavTitle="title" logo="logo" icon="icon" name="name" password="password" color="color"  navigationRoute="/">
    .. main drawer content
    <div td-navigation-drawer-menu>
      .. menu drawer content
    </div>
  </td-navigation-drawer>
  <div td-sidenav-content>
   .. more sidenav content
  </div>
  .. main content
</td-layout>
```