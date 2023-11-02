import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';
import { AnimationCurves, AnimationDurations } from '@angular/material/core';

export const tdSideSheetAnimations: {
  readonly sideSheetContainer: AnimationTriggerMetadata;
} = {
  /** Animation that is applied on the side-sheet container by default. */
  sideSheetContainer: trigger('sideSheetContainer', [
    state('void, exit', style({ transform: 'translateX(100%)' })),
    state('enter', style({ transform: 'translateX(0%)', opacity: 1 })),
    transition(
      '* => enter',
      animate(
        `${AnimationDurations.ENTERING} ${AnimationCurves.ACCELERATION_CURVE}`,
        style({ transform: 'translateX(0)', opacity: 1 })
      )
    ),
    transition(
      '* => void, * => exit',
      animate(
        `${AnimationDurations.EXITING} ${AnimationCurves.ACCELERATION_CURVE}`,
        style({ transform: 'translateX(100%)' })
      )
    ),
  ]),
};
