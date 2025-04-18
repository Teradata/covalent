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

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [
    CovalentSideSheetContainerComponent,
    CovalentSideSheetActionsDirective,
    CovalentSideSheetCloseDirective,
    CovalentSideSheetContentDirective,
    CovalentSideSheetTitleDirective,
    CovalentSideSheetWrapperDirective,
  ],
  exports: [
    CovalentSideSheetActionsDirective,
    CovalentSideSheetCloseDirective,
    CovalentSideSheetContentDirective,
    CovalentSideSheetTitleDirective,
    CovalentSideSheetWrapperDirective,
  ],
  providers: [CovalentSideSheet],
})
export class CovalentSideSheetModule {}
