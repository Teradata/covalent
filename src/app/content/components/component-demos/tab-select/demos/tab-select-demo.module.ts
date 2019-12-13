import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabSelectDemoBasicComponent } from './tab-select-demo-basic/tab-select-demo-basic.component';
import { CovalentTabSelectModule } from '@covalent/core/tab-select';
import { TabSelectDemoComponent } from './tab-select-demo.component';
import { TabSelectDemoRoutingModule } from './tab-select-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TabSelectDemoComponent, TabSelectDemoBasicComponent],
  imports: [
    DemoModule,
    TabSelectDemoRoutingModule,
    /** Covalent Modules */
    CovalentTabSelectModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
  ],
})
export class TabSelectDemoModule {}
