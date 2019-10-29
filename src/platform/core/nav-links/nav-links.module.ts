import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';

import { TdNavLinksComponent } from './nav-links.component';

@NgModule({
  declarations: [TdNavLinksComponent], // directives, components, and pipes owned by this NgModule
  exports: [TdNavLinksComponent],
  imports: [
    CommonModule,
    CovalentCommonModule,
    CovalentExpansionPanelModule,
    MatRippleModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
  ], // modules needed to run this module
})
export class CovalentNavLinksModule {}
