import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { CovalentSideSheet } from './side-sheet';
import { CovalentSideSheetContainer } from './side-sheet-container';
import {
  CovalentSideSheetActions,
  CovalentSideSheetClose,
  CovalentSideSheetContent,
  CovalentSideSheetTitle,
  CovalentSideSheetWrapper,
} from './side-sheet.content-directives';

@NgModule({
  declarations: [
    CovalentSideSheetContainer,
    CovalentSideSheetActions,
    CovalentSideSheetClose,
    CovalentSideSheetContent,
    CovalentSideSheetTitle,
    CovalentSideSheetWrapper,
  ],
  exports: [
    CovalentSideSheetActions,
    CovalentSideSheetClose,
    CovalentSideSheetContent,
    CovalentSideSheetTitle,
    CovalentSideSheetWrapper,
  ],
  imports: [PortalModule, MatDialogModule, MatCommonModule],
  providers: [CovalentSideSheet],
})
export class CovalentSideSheetModule {}
