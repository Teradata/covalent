import { Type } from '@angular/core';
import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';

export const TD_FILE_DIRECTIVES: Type[] = [
  TdFileSelectDirective,
  TdFileDropDirective,
];

export { TdFileUploadComponent } from './file-upload.component';
export { TdFileSelectDirective } from './directives/file-select.directive';
export { TdFileDropDirective } from './directives/file-drop.directive';
export { TdFileService, IUploadOptions } from './services/file.service';
