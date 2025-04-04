## TdLayoutComponent - td-layout

`<td-layout>` is a blank main sidenav component that gets hooked as parent of all the other layouts. (triggered by their menu buttons)

## API Summary

#### Inputs

- mode: 'over' | 'side' | 'push'
  - The mode or styling of the sidenav. Defaults to 'over'.
- opened: boolean
  - Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
  - Defaults to 'false'.
- sidenavWidth: string
  - Sets the 'width' of the sidenav in either 'px' or '%'.
  - Defaults to '320px'.
- containerAutosize: boolean
  - Sets 'autosize' of the sidenav-container.
  - Defaults to 'false'.

## Usage

`[td-sidenav-content]` is used to include content in the main sidenav.

Example for Main Layout:

```html
<td-layout [mode]="'side'" [opened]="true" [sidenavWidth]="'257px'">
  <div td-sidenav-content>.. more sidenav content</div>
  .. main content
</td-layout>
```

To toggle/close/open the main sidenav from child layouts/components, you can use the `[tdLayoutToggle]`, `[tdLayoutClose]` or `[tdLayoutOpen]` directives on any element and its click event will trigger the sidenav action.

Example:

```html
<button mat-icon-button [tdLayoutToggle]="true">
  // or tdLayoutOpen / tdLayoutClose
  <mat-icon>menu</mat-icon>
</button>
```

To disable the sidenav action, just set the input to false.

```html
<button mat-icon-button [tdLayoutToggle]="false">
  <mat-icon>menu</mat-icon>
</button>
```

## Installation

This component can be installed as npm package.

```bash
npm i -save @covalent/core
```

## Setup

Import the **[CovalentLayoutModule]** in your NgModule:

```typescript
import { CovalentLayoutModule } from '@covalent/core/layout';
@NgModule({
  imports: [
    CovalentLayoutModule,
    ...
  ],
  ...
})
export class MyModule {}
```

### Theming

See [theming](https://teradata.github.io/covalent/v8/#/docs/theming/custom-theme) in the covalent docs for more info.

## TdNavigationDrawerComponent - td-navigation-drawer

`<td-navigation-drawer>` is a component that follows the [material design spec](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs) is used as an addon component for `td-layout`.

## API Summary

#### Inputs

- sidenavTitle: string
  - Title set in toolbar.
- icon: string
  - Icon name to be displayed before the title.
- logo: string
  - Logo icon name to be displayed before the title.
  - If [icon] is set, then this will not be shown.
- avatar: string
  - Avatar url to be displayed before the title.
  - If [icon] or [logo] are set, then this will not be shown.
- color: string
  - Optional sidenav toolbar color.
- navigationRoute: string
  - Option to set the combined route for the icon, logo, and sidenavTitle.
- backgroundUrl: SafeResourceUrl
  - Image to be displayed as the background of the toolbar.
  - URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
- name: string
  - String to be displayed as part of the navigation drawer sublabel.
  - If [email] is not set, then [name] will be the toggle menu text.
- email: string
  - String to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
  - If [email] and [name] are not set, then the toggle menu is not rendered.

## Usage

`[td-sidenav-content]` is used to include content in the main sidenav.

`[td-navigation-drawer-menu]` is used to include content to the `toggle` user menu. if no tag is used, then the toggle button dissapears.

Example for Main Layout / Navigation Drawer Combo:

```html
<td-layout>
  <td-navigation-drawer sidenavTitle="title" logo="logo" icon="icon" name="name" password="password" color="color" navigationRoute="/">
    .. main drawer content
    <div tdNavigationDrawerMenu>.. menu drawer content</div>
  </td-navigation-drawer>
  <div td-sidenav-content>.. more sidenav content</div>
  .. main content
</td-layout>
```
