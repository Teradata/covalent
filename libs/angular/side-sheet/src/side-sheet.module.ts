import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { CovalentSideSheet } from './side-sheet';
import { CovalentSideSheetContainerComponent } from './side-sheet-container';
import {
  CovalentSideSheetActionsDirective,
  CovalentSideSheetCloseDirective,
  CovalentSideSheetContentDirective,
  CovalentSideSheetTitleDirective,
  CovalentSideSheetWrapperDirective,
} from './side-sheet.content-directives';

@NgModule({
  exports: [
    CovalentSideSheetActionsDirective,
    CovalentSideSheetCloseDirective,
    CovalentSideSheetContentDirective,
    CovalentSideSheetTitleDirective,
    CovalentSideSheetWrapperDirective,
  ],
  imports: [
    PortalModule,
    MatDialogModule,
    MatCommonModule,
    CovalentSideSheetContainerComponent,
    CovalentSideSheetActionsDirective,
    CovalentSideSheetCloseDirective,
    CovalentSideSheetContentDirective,
    CovalentSideSheetTitleDirective,
    CovalentSideSheetWrapperDirective,
  ],
  providers: [CovalentSideSheet],
})
export class CovalentSideSheetModule {}
