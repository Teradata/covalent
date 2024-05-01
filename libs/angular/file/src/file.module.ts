import { NgModule, Type } from '@angular/core';

import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileSelectDirective } from './directives/file-select.directive';
import {
  TdFileInputComponent,
  TdFileInputLabelDirective,
} from './file-input/file-input.component';
import { TdFileUploadComponent } from './file-upload/file-upload.component';
import { TdFileService } from './services/file.service';

const TD_FILE: Type<any>[] = [
  TdFileSelectDirective,
  TdFileDropDirective,
  TdFileUploadComponent,
  TdFileInputComponent,
  TdFileInputLabelDirective,
];

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TD_FILE],
  exports: [TD_FILE],
  providers: [TdFileService],
})
export class CovalentFileModule {}
