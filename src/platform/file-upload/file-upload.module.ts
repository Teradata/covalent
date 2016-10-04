import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileUploadComponent } from './file-upload.component';
import { TdFileService } from './services/file.service';

export const TD_FILE_DIRECTIVES: Type<any>[] = [
  TdFileSelectDirective,
  TdFileDropDirective,
  TdFileUploadComponent,
];

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    TD_FILE_DIRECTIVES,
  ],
  exports: [
    TD_FILE_DIRECTIVES,
  ],
})
export class CovalentFileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentFileModule,
      providers: [ TdFileService ],
    };
  }
}
