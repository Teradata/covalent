import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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

@NgModule({
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, PortalModule],
  declarations: [TD_FILE],
  exports: [TD_FILE],
  providers: [TdFileService],
})
export class CovalentFileModule {}
