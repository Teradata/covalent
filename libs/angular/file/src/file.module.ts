import { Type } from '@angular/core';
import { NgModule } from '@angular/core';
import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileUploadComponent } from './file-upload/file-upload.component';
import {
  TdFileInputComponent,
  TdFileInputLabelDirective,
} from './file-input/file-input.component';
import { TdFileService } from './services/file.service';

const TD_FILE: Type<any>[] = [
  TdFileSelectDirective,
  TdFileDropDirective,
  TdFileUploadComponent,
  TdFileInputComponent,
  TdFileInputLabelDirective,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TD_FILE],
  exports: [TD_FILE],
  providers: [TdFileService],
})
export class CovalentFileModule {}
