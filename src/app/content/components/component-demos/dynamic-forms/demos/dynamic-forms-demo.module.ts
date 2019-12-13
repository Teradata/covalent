import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsDemoBasicComponent } from './dynamic-forms-demo-basic/dynamic-forms-demo-basic.component';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { DynamicFormsDemoComponent } from './dynamic-forms-demo.component';
import { DynamicFormsDemoRoutingModule } from './dynamic-forms-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [DynamicFormsDemoComponent, DynamicFormsDemoBasicComponent],
  imports: [
    DemoModule,
    DynamicFormsDemoRoutingModule,
    /** Covalent Modules */
    CovalentDynamicFormsModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class DynamicFormsDemoModule {}
