/* tslint:disable */
import { FocusOrigin } from '@angular/cdk/a11y';
import { DialogRef } from '@angular/cdk/dialog';
import { OverlayRef } from '@angular/cdk/overlay';
import { BasePortalOutlet } from '@angular/cdk/portal';
import { MatDialogRef, MatDialogContainer } from '@angular/material/dialog';
import { CovalentSideSheetConfig } from './side-sheet.config';

// Counter for unique dialog ids.
let uniqueId = 0;

// Create a new side sheet ref to change the id of the ref
export class CovalentSideSheetRef<T, R = any> extends MatDialogRef<T, R> {
  constructor(
    public overlayRef: OverlayRef,
    public config: CovalentSideSheetConfig,
    public override _containerInstance: MatDialogContainer,
    override readonly id: string = `td-side-sheet-${uniqueId++}`
  ) {
    const ref = new DialogRef<R, T>(overlayRef, config);
    super(ref, config, _containerInstance);
    (ref as { containerInstance: BasePortalOutlet }).containerInstance =
      this._containerInstance;
  }
}

export function _closeSideSheetVia<R>(
  ref: CovalentSideSheetRef<R>,
  interactionType: FocusOrigin,
  result?: R
) {
  // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
  // For those, we keep the behavior as is and do not deal with the interaction type.
  if (ref._containerInstance !== undefined) {
    ref._containerInstance._closeInteractionType = interactionType;
  }
  return ref.close(result);
}
