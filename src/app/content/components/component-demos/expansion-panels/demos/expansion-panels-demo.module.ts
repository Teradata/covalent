import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ExpansionPanelsDemoBasicComponent } from './expansion-panels-demo-basic/expansion-panels-demo-basic.component';
import { ExpansionPanelsDemoGroupedComponent } from './expansion-panels-demo-grouped/expansion-panels-demo-grouped.component';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { ExpansionPanelsDemoComponent } from './expansion-panels-demo.component';
import { ExpansionPanelsDemoRoutingModule } from './expansion-panels-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [ExpansionPanelsDemoComponent, ExpansionPanelsDemoBasicComponent, ExpansionPanelsDemoGroupedComponent],
  imports: [
    DemoModule,
    ExpansionPanelsDemoRoutingModule,
    /** Covalent Modules */
    CovalentExpansionPanelModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
})
export class ExpansionPanelsDemoModule {}
