import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatSelectModule, MatCheckboxModule, MatSliderModule, MatSlideToggleModule, MatIconModule,
   MatButtonModule } from '@angular/material';

import { CovalentCommonModule } from '../core';
import { CovalentFileModule } from '../core';

import { TdDynamicFormsComponent } from './dynamic-forms.component';
import { TdDynamicElementComponent, TdDynamicElementDirective, TdDynamicFormsErrorTemplate } from './dynamic-element.component';
import {  DYNAMIC_FORMS_PROVIDER } from './services/dynamic-forms.service';

import { TdDynamicInputComponent } from './dynamic-elements/dynamic-input/dynamic-input.component';
import { TdDynamicFileInputComponent } from './dynamic-elements/dynamic-file-input/dynamic-file-input.component';
import { TdDynamicTextareaComponent } from './dynamic-elements/dynamic-textarea/dynamic-textarea.component';
import {
  TdDynamicSlideToggleComponent,
} from './dynamic-elements/dynamic-slide-toggle/dynamic-slide-toggle.component';
import {
  TdDynamicCheckboxComponent,
} from './dynamic-elements/dynamic-checkbox/dynamic-checkbox.component';
import { TdDynamicSliderComponent } from './dynamic-elements/dynamic-slider/dynamic-slider.component';
import { TdDynamicSelectComponent } from './dynamic-elements/dynamic-select/dynamic-select.component';

const TD_DYNAMIC_FORMS: Type<any>[] = [
  TdDynamicFormsComponent,
  TdDynamicElementComponent,
  TdDynamicElementDirective,
  TdDynamicFormsErrorTemplate,
];

const TD_DYNAMIC_FORMS_ENTRY_COMPONENTS: Type<any>[] = [
  TdDynamicInputComponent,
  TdDynamicFileInputComponent,
  TdDynamicTextareaComponent,
  TdDynamicSlideToggleComponent,
  TdDynamicCheckboxComponent,
  TdDynamicSliderComponent,
  TdDynamicSelectComponent,
];

@NgModule({
  declarations: [
    TD_DYNAMIC_FORMS,
    TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    CovalentCommonModule,
    CovalentFileModule,
  ],
  exports: [
    TD_DYNAMIC_FORMS,
    TD_DYNAMIC_FORMS_ENTRY_COMPONENTS,
  ],
  providers: [
    DYNAMIC_FORMS_PROVIDER,
  ],
  entryComponents: [ TD_DYNAMIC_FORMS_ENTRY_COMPONENTS ],
})
export class CovalentDynamicFormsModule {

}
