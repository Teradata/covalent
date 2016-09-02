import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MdCoreModule, MdRippleModule, PortalModule,
         OverlayModule, RtlModule, MdLiveAnnouncer } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdTooltipModule } from '@angular2-material/tooltip';

const MATERIAL_MODULES: Type<any>[] = [
  MdCoreModule,
  MdButtonModule,
  MdIconModule,
  MdRippleModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [MdLiveAnnouncer],
})
export class MaterialModule { }

import { TdFileSelectDirective } from './directives/file-select.directive';
import { TdFileDropDirective } from './directives/file-drop.directive';
import { TdFileUploadComponent } from './file-upload.component';
import { TdFileService } from './services/file.service';

export const TD_FILE_DIRECTIVES: Type<any>[] = [
  TdFileSelectDirective,
  TdFileDropDirective,
  TdFileUploadComponent,
];

export { TdFileUploadComponent } from './file-upload.component';
export { TdFileSelectDirective } from './directives/file-select.directive';
export { TdFileDropDirective } from './directives/file-drop.directive';
export { TdFileService, IUploadOptions } from './services/file.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule,
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
