import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentDynamicMenuModule } from '@covalent/core/dynamic-menu';
import { DynamicMenuDemoComponent } from './dynamic-menu-demo.component';
import { DynamicMenuDemoRoutingModule } from './dynamic-menu-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DynamicMenuHeroSharedModule } from './dynamic-menu-demo-basic/dynamic-menu-hero.shared';

@NgModule({
  declarations: [DynamicMenuDemoComponent],
  imports: [
    DynamicMenuHeroSharedModule,
    DemoModule,
    DynamicMenuDemoRoutingModule,
    /** Covalent Modules */
    CovalentDynamicMenuModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
  ],
})
export class DynamicMenuDemoModule {}
