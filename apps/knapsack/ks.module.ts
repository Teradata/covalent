// This module is imported into the ks angular app
// Use this to add any custom components or modules
// Note: Providers from the `BrowserModule` have already been loaded.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CovalentCommonModule } from '@covalent/core/common';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    CovalentCommonModule,
    CovalentUserProfileModule,
    CovalentBreadcrumbsModule,
  ],
  exports: [CovalentUserProfileModule, CovalentBreadcrumbsModule],
})
export default class KsModule {}
