import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  animations: [slideInUpAnimation],
})
export class ThemeComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
  themeScss = `
  @import '~@angular/material/theming';
  @import '~@covalent/core/theming/all-theme';
  @import '~@covalent/markdown/markdown-theme';
  @import '~@covalent/highlight/highlight-theme';
  // Plus imports for other components in your app.
  
  // Define a custom typography config that overrides the font-family
  // or any typography level.
  $typography: mat-typography-config(
    $font-family: 'Roboto, monospace',
    $headline: mat-typography-level(32px, 48px, 700)
  );
  
  @include mat-core($typography); // $typography is an **optional** argument for the mat-core
  
  // Define the palettes for your theme using the Material Design palettes available in palette.scss
  // (imported above). For each palette, you can optionally specify a default, lighter, and darker
  // hue.
  $primary: mat-palette($mat-blue, 700);
  $accent:  mat-palette($mat-orange, 800, A100, A400);
  
  // The warn palette is optional (defaults to red).
  $warn:    mat-palette($mat-red, 600);
  
  // Create the theme object (a Sass map containing all of the palettes).
  $theme: mat-light-theme($primary, $accent, $warn);
  
  // Include theme styles for core and each component used in your app.
  // Alternatively, you can import and @include the theme mixins for each component
  // that you are using.
  @include angular-material-theme($theme);
  @include covalent-theme($theme, $typography); // $typography is an **optional** argument for the covalent-theme
  @include covalent-markdown-theme($theme);
  @include covalent-highlight-theme();
  `;
}
