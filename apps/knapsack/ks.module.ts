// This module is imported into the ks angular app
// Use this to add any custom components or modules
// Note: Providers from the `BrowserModule` have already been loaded.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { CovalentCommonModule } from '@covalent/core/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    CovalentCommonModule,
    CovalentUserProfileModule,
    CovalentBreadcrumbsModule,
  ],
  exports: [CovalentUserProfileModule, CovalentBreadcrumbsModule],
})
export default class KsModule {}
