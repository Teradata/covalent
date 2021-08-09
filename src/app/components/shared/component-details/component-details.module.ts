import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentMessageModule } from '@covalent/core/message';

import { ComponentHeroComponent } from './component-hero/component-hero.component';
import { DetailsWrapperComponent } from './component-details-wrapper/content-details.component';

import { DocumentationToolsModule } from 'app/documentation-tools';

@NgModule({
  declarations: [DetailsWrapperComponent, ComponentHeroComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentMessageModule,
    DocumentationToolsModule,
  ],
  providers: [],
})
export class ComponentDetailsModule {}
