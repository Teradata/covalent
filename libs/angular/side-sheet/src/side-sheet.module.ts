import { NgModule } from '@angular/core';
import { CovalentSideSheet } from './side-sheet';
import { CovalentSideSheetContainerComponent } from './side-sheet-container';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [CovalentSideSheetContainerComponent],
  exports: [CovalentSideSheetContainerComponent],
  providers: [CovalentSideSheet],
})
export class CovalentSideSheetModule {}
