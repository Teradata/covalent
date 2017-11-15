import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileUploadComponent } from './file-upload/file-upload.component';
import { TdFileInputComponent, TdFileInputLabelDirective } from './file-input/file-input.component';
import { TdFileService } from './services/file.service';

const TD_FILE: Type<any>[] = [
  TdFileSelectDirective,
  TdFileDropDirective,
  TdFileUploadComponent,
  TdFileInputComponent,
  TdFileInputLabelDirective,
];

export { TdFileUploadComponent } from './file-upload/file-upload.component';
export { TdFileInputComponent, TdFileInputLabelDirective } from './file-input/file-input.component';
export { TdFileSelectDirective } from './directives/file-select.directive';
export { TdFileDropDirective } from './directives/file-drop.directive';
export { TdFileService, IUploadOptions } from './services/file.service';

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    PortalModule,
  ],
  declarations: [
    TD_FILE,
  ],
  exports: [
    TD_FILE,
  ],
  providers: [
    TdFileService,
  ],
})
export class CovalentFileModule {

}
