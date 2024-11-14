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
  @use '@angular/material' as mat;

  // (optional) Additional themes
  @use '@covalent/markdown/markdown-theme' as markdown;
  @use '@covalent/highlight/highlight-theme' as highlight;
  @import '@covalent/flavored-markdown/flavored-markdown-theme';

  // Covalent core themes
  @import '@covalent/core/theming/all-theme';
  @import '@covalent/core/theming/teradata-theme';

  // Plus imports for other components in your app.

  @include mat.core();

  // Define a custom typography config that overrides the font-family
  // or any typography level.
  $typography: mat.define-typography-config(
    $font-family: 'Inter, monospace',
    $headline-1: mat.define-typography-level(32px, 48px, 700),
  );

  // Define the palettes for your theme using the Material Design palettes available in palette.scss
  // (imported above). For each palette, you can optionally specify a default, lighter, and darker
  // hue.
  $primary: mat.define-palette($mat-blue, 700);
  $accent: mat.define-palette($mat-orange, 800, A100, A400);

  // The warn palette is optional (defaults to red).
  $warn: mat.define-palette($mat-red, 600);

  // Create the theme object (a Sass map containing all of the palettes).
  $theme: mat.define-light-theme(
    (
      color: (
        primary: $primary,
        accent: $accent,
        warn: $warn,
      ),
      typography: $typography,
    )
  );

  // Include the Angular Material styles using the custom theme
  @include mat.all-component-themes($theme);

  // Include theme styles for core and each component used in your app.
  @include covalent-theme($theme);
  @include markdown.covalent-markdown-theme($theme);
  @include covalent-flavored-markdown-theme($theme);
  @include highlight.covalent-highlight-theme($theme);
  `;
}
