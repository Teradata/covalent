import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DynamicFormsDemoArrayComponent } from './dynamic-forms-demo-array/dynamic-forms-demo-array.component';
import { DynamicFormsDemoTextComponent } from './dynamic-forms-demo-text/dynamic-forms-demo-text.component';
import { DynamicFormsDemoBooleanComponent } from './dynamic-forms-demo-boolean/dynamic-forms-demo-boolean.component';
import { DynamicFormsDemoCustomElementsComponent } from './dynamic-forms-demo-custom-elements/dynamic-forms-demo-custom-elements.component';
import { DynamicFormsDemoCustomValidationComponent } from './dynamic-forms-demo-custom-validation/dynamic-forms-demo-custom-validation.component';
import { TdTestDynamicComponent } from './dynamic-forms-demo-custom-elements/dynamic-forms-demo-custom-elements.component';
import { DynamicFormsDemoDateComponent } from './dynamic-forms-demo-date/dynamic-forms-demo-date.component';
import { DynamicFormsDemoFileInputComponent } from './dynamic-forms-demo-file-input/dynamic-forms-demo-file-input.component';
import { DynamicFormsDemoNumberComponent } from './dynamic-forms-demo-number/dynamic-forms-demo-number.component';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { DynamicFormsDemoComponent } from './dynamic-forms-demo.component';
import { DynamicFormsDemoRoutingModule } from './dynamic-forms-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    DynamicFormsDemoComponent,
    DynamicFormsDemoArrayComponent,
    DynamicFormsDemoTextComponent,
    DynamicFormsDemoBooleanComponent,
    DynamicFormsDemoCustomElementsComponent,
    DynamicFormsDemoCustomValidationComponent,
    TdTestDynamicComponent,
    DynamicFormsDemoDateComponent,
    DynamicFormsDemoFileInputComponent,
    DynamicFormsDemoNumberComponent,
  ],
  imports: [
    DemoModule,
    DynamicFormsDemoRoutingModule,
    /** Covalent Modules */
    CovalentDynamicFormsModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class DynamicFormsDemoModule {}
